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
import { BcryptProvider } from 'src/auth/providers/bcrypt.provider';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,

    private readonly hashingProvider: BcryptProvider,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    const existingUser = this.userModel.findOne({ email });

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

    //TODO: add an interceptor that removes password
    return user;
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
      const user = this.userModel.findOne({ email });

      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return user;
    } catch (error) {
      throw new RequestTimeoutException(`${error.message}`);
    }
  }

  async findById(id: number) {
    try {
      const user = this.userModel.findById(id);

      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return user;
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
