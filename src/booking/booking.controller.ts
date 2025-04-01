import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  PipeTransform,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

class ToNumberPipe implements PipeTransform {
  transform(value: string): number {
    return Number(value);
  }
}

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  createBooking(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.createBooking(createBookingDto);
  }

  @Patch(':id/confirm')
  confirmBooking(@Param('id') id: string) {
    return this.bookingService.confirmBooking(id);
  }

  @Patch(':id/confirm/payment')
  confirmBookingPayment(@Param('id') id: string) {
    return this.bookingService.confirmBookingPayment(id);
  }

  @Get()
  getAllBookings() {
    return this.bookingService.findAll();
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
  //   return this.bookingService.update(+id, updateBookingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bookingService.remove(+id);
  // }
}
