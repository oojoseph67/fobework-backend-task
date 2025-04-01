import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Booking, BookingStatusEnum } from './entities/booking.entity';
import { Model } from 'mongoose';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name)
    private readonly bookingModel: Model<Booking>,
  ) {}

  async createBooking(createBookingDto: CreateBookingDto) {
    try {
      return await this.bookingModel.create({
        ...createBookingDto,
      });
    } catch (error) {
      throw new HttpException('Failed to create event', HttpStatus.BAD_REQUEST);
    }
  }

  async confirmBooking(id: number) {
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
      throw new HttpException('Failed to create event', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    return await this.bookingModel.find({
      status: BookingStatusEnum.Confirmed,
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} booking`;
  // }

  // update(id: number, updateBookingDto: UpdateBookingDto) {
  //   return `This action updates a #${id} booking`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} booking`;
  // }
}
