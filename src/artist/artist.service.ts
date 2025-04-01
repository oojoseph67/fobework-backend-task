import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from './entities/artist.entity';

@Injectable()
export class ArtistService {
  constructor(
    @InjectModel(Artist.name)
    private readonly artistModel: Model<Artist>,
  ) {}

  async create(createArtistDto: CreateArtistDto) {
    try {
      const { userId, stageName } = createArtistDto;

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
    return await this.artistModel.find({});
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} artist`;
  // }

  // update(id: number, updateArtistDto: UpdateArtistDto) {
  //   return `This action updates a #${id} artist`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} artist`;
  // }
}
