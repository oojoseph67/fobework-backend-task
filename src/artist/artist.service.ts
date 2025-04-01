import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from './entities/artist.entity';
import { User, UserRole } from 'src/users/entities/user.entity';

@Injectable()
export class ArtistService {
  constructor(
    @InjectModel(Artist.name)
    private readonly artistModel: Model<Artist>,

    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async create(createArtistDto: CreateArtistDto) {
    try {
      const { userId, stageName } = createArtistDto;

      const existingUser = await this.userModel.findById(userId);

      if (!existingUser) {
        throw new HttpException(`User doesn't Exists`, HttpStatus.BAD_REQUEST);
      }

      const userRole = existingUser.role as UserRole;

      if (userRole !== UserRole.User) {
        throw new HttpException(
          'Organizers cant be Artist',
          HttpStatus.BAD_GATEWAY,
        );
      }

      const existingArtist = await this.artistModel.findOne({ userId });

      if (existingArtist) {
        throw new HttpException(
          `Artist :${stageName} with userId: ${userId} already exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      const artist = await this.artistModel.create({
        ...createArtistDto,
      });
      artist.save();

      return artist;
    } catch (error) {
      throw new HttpException(
        `Failed to create artist: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(): Promise<Artist[]> {
    try {
      return await this.artistModel.find({});
    } catch (error) {
      throw new HttpException(
        `Failed to create artist: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findArtistByUserId(id: number): Promise<Artist> {
    try {
      const artist = await this.artistModel.findOne({ userId: id });

      if (!artist) {
        throw new HttpException(
          `Artist with userId: ${id} doesnt exist`,
          HttpStatus.BAD_REQUEST,
        );
      }

      return artist;
    } catch (error) {
      throw new HttpException(
        `Failed to create artist: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findArtistById(id: string): Promise<Artist> {
    try {
      const artist = await this.artistModel.findById(id);

      if (!artist) {
        throw new HttpException(
          `Artist with id: ${id} doesnt exist`,
          HttpStatus.BAD_REQUEST,
        );
      }

      return artist;
    } catch (error) {
      throw new HttpException(
        `Failed to create artist: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // update(id: number, updateArtistDto: UpdateArtistDto) {
  //   return `This action updates a #${id} artist`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} artist`;
  // }
}
