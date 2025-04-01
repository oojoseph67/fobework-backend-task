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
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

class ToNumberPipe implements PipeTransform {
  transform(value: string): number {
    return Number(value);
  }
}

@ApiTags('bookings')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new booking' })
  @ApiResponse({ status: 201, description: 'Booking successfully created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  createBooking(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.createBooking(createBookingDto);
  }

  @Patch(':id/confirm')
  @ApiOperation({ summary: 'Confirm a booking' })
  @ApiParam({ name: 'id', description: 'Booking ID' })
  @ApiResponse({ status: 200, description: 'Booking successfully confirmed' })
  @ApiResponse({ status: 404, description: 'Booking not found' })
  confirmBooking(@Param('id') id: string) {
    return this.bookingService.confirmBooking(id);
  }

  @Patch(':id/confirm/payment')
  @ApiOperation({ summary: 'Confirm booking payment' })
  @ApiParam({ name: 'id', description: 'Booking ID' })
  @ApiResponse({ status: 200, description: 'Booking payment successfully confirmed' })
  @ApiResponse({ status: 404, description: 'Booking not found' })
  confirmBookingPayment(@Param('id') id: string) {
    return this.bookingService.confirmBookingPayment(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all bookings' })
  @ApiResponse({ status: 200, description: 'List of all bookings' })
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
