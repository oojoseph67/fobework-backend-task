import {
  HttpException,
  HttpStatus,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { LoginDto, CreateUserDto } from './dto';
import { Artist } from 'src/artist/entities/artist.entity';
import { Argon2Provider } from 'src/auth/providers/argon2.provider';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,

    @InjectModel(Artist.name)
    private readonly artistModel: Model<Artist>,

    private readonly hashingProvider: Argon2Provider,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    const existingUser = await this.userModel.findOne({ email });

    if (existingUser) {
      throw new HttpException(
        'User with email already exists, Try Logging',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await this.hashingProvider.hashPassword({
      password,
    });

    const user = await this.userModel.create({
      ...createUserDto,
      password: hashedPassword,
    });
    user.save();

    return await this.userModel.findById(user._id).select('-password');
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const existingUser = await this.findUserByEmail(email);

    if (!existingUser.password) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    let isPasswordCorrect: boolean;

    try {
      isPasswordCorrect = await this.hashingProvider.comparePasswords({
        hashedPassword: existingUser.password,
        password,
      });
    } catch (error: any) {
      throw new RequestTimeoutException(error.message, {
        cause: error,
        description: 'Request timeout. Could not compare passwords',
      });
    }

    if (!isPasswordCorrect) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return 'logged in';
  }

  async findUserByEmail(email: string) {
    try {
      const user = await this.userModel.findOne({ email });

      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return user;
    } catch (error) {
      throw new RequestTimeoutException(`${error.message}`);
    }
  }

  async findById(id: string) {
    try {
      const user = await this.userModel.findById(id).select('-password');

      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      let artist: Artist;

      try {
        artist = await this.artistModel.findOne({
          userId: id,
        });
      } catch (error) {
        throw new HttpException(
          'Failed to check if user is an artist',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (artist) {
        return { user, artist };
      } else {
        return { user };
      }
    } catch (error) {
      throw new RequestTimeoutException(`${error.message}`);
    }
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
