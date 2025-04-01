import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  Booking,
  BookingPaymentEnum,
  BookingStatusEnum,
} from './entities/booking.entity';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { UserRole } from 'src/users/entities/user.entity';
import { EventsService } from 'src/events/events.service';
import { ArtistService } from 'src/artist/artist.service';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name)
    private readonly bookingModel: Model<Booking>,

    private readonly userService: UsersService,
    private readonly eventsService: EventsService,
    private readonly artistService: ArtistService,
  ) {}

  async createBooking(createBookingDto: CreateBookingDto) {
    try {
      const { artistId, organizerId, eventId } = createBookingDto;

      const existingOrganizer = await this.userService.findById(organizerId);

      const isOrganizer = existingOrganizer.user.role === UserRole.ORGANIZER;

      if (!isOrganizer) {
        throw new HttpException(
          'Only Organizers can create Booking',
          HttpStatus.FORBIDDEN,
        );
      }

      await this.artistService.findArtistById(artistId);
      await this.eventsService.findEventById(eventId);

      return await this.bookingModel.create({
        ...createBookingDto,
      });
    } catch (error) {
      throw new HttpException(
        `Failed to create event: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // TODO: check if the sender is the artist
  async confirmBooking(id: string) {
    try {
      const existingBooking = await this.bookingModel.findById(id);

      if (!existingBooking) {
        throw new HttpException(
          'Booking doesnt exists',
          HttpStatus.BAD_REQUEST,
        );
      }

      existingBooking.status = BookingStatusEnum.Confirmed;
      return existingBooking.save();
    } catch (error) {
      throw new HttpException(
        `Failed to create event: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async confirmBookingPayment(id: string) {
    try {
      const existingBooking = await this.bookingModel.findById(id);

      if (!existingBooking) {
        throw new HttpException(
          'Booking doesnt exists',
          HttpStatus.BAD_REQUEST,
        );
      }

      existingBooking.paymentStatus = BookingPaymentEnum.Paid;
      return existingBooking.save();
    } catch (error) {
      throw new HttpException(
        `Failed to create event: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    return await this.bookingModel.find({
      status: BookingStatusEnum.Confirmed,
    });
  }
}
