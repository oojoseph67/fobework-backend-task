import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Event } from './entities/event.entity';
import { Model } from 'mongoose';
import { User, UserRole } from 'src/users/entities/user.entity';
import { Artist } from 'src/artist/entities/artist.entity';
import { ArtistModule } from 'src/artist/artist.module';
import { ArtistService } from 'src/artist/artist.service';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name)
    private readonly eventModel: Model<Event>,

    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    try {
      const { organizerId } = createEventDto;

      const existingOrganizer = await this.userModel.findById(
        organizerId.toString(),
      );

      if (!existingOrganizer) {
        throw new HttpException(
          `User Profile doesn't Exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      const userRole = existingOrganizer.role as UserRole;

      if (userRole !== UserRole.ORGANIZER) {
        throw new HttpException(
          'Only Organizers can create events',
          HttpStatus.BAD_GATEWAY,
        );
      }

      // for (const artist of artists) {
      //   const existingArtist = await this.artistModel.findOne({
      //     userId: artist,
      //   });

      //   if (!existingArtist) {
      //     throw new HttpException(
      //       `Artist with id: ${artist} doesnt exist`,
      //       HttpStatus.BAD_REQUEST,
      //     );
      //   }
      // }

      return await this.eventModel.create({
        ...createEventDto,
      });
    } catch (error) {
      throw new HttpException(
        `Failed to create event: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findEventById(id: string): Promise<Event> {
    try {
      const event = await this.eventModel.findById(id);

      if (!event) {
        throw new HttpException(
          `Event with id: ${id} doesnt exists`,
          HttpStatus.BAD_REQUEST,
        );
      }

      return event;
    } catch (error) {
      throw new HttpException(
        `Failed to create event: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(): Promise<Event[]> {
    try {
      // // .populate('artists');
      // return await this.eventModel.find({}).populate({
      //   path: 'artists',
      //   model: 'Artist',
      //   populate: {
      //     path: 'userId',
      //     model: 'User',
      //   },
      // });

      return await this.eventModel.find({});
    } catch (error) {
      throw new HttpException(
        `Failed to create event: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} event`;
  // }

  // update(id: number, updateEventDto: UpdateEventDto) {
  //   return `This action updates a #${id} event`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} event`;
  // }
}
