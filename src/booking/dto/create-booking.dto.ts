import { IsNotEmpty, IsMongoId, IsEnum, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
  BookingPaymentEnum,
  BookingStatusEnum,
} from '../entities/booking.entity';

export class CreateBookingDto {
  @ApiProperty({ description: 'Artist ID reference' })
  @IsNotEmpty()
  @IsMongoId()
  artistId: string;

  @ApiProperty({ description: 'Event ID reference' })
  @IsNotEmpty()
  @IsMongoId()
  eventId: string;

  @ApiProperty({ description: 'Organizer ID reference' })
  @IsNotEmpty()
  @IsMongoId()
  organizerId: string;

  @ApiProperty({
    description: 'Event budget in USD',
    example: 5000,
    minimum: 0,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  budget: number;

  // @ApiProperty({
  //   description: 'Booking status',
  //   enum: BookingStatusEnum,
  //   example: BookingStatusEnum.Pending,
  // })
  // @IsNotEmpty()
  // @IsEnum(BookingStatusEnum)
  // status: BookingStatusEnum;

  // @ApiProperty({
  //   description: 'Payment status',
  //   enum: BookingPaymentEnum,
  //   example: BookingPaymentEnum.Pending,
  // })
  // @IsNotEmpty()
  // @IsEnum(BookingPaymentEnum)
  // paymentStatus: BookingPaymentEnum;
}
