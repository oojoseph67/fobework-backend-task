import { IsNotEmpty, IsMongoId, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BookingPaymentEnum, BookingStatusEnum } from "../entities/booking.entity"

export class CreateBookingDto {
    @ApiProperty({ description: 'Artist ID reference' })
    @IsNotEmpty()
    @IsMongoId()
    artistId: string

    @ApiProperty({ description: 'Event ID reference' })
    @IsNotEmpty()
    @IsMongoId()
    eventId: string

    @ApiProperty({ description: 'Organizer ID reference' })
    @IsNotEmpty()
    @IsMongoId()
    organizerId: string

    @ApiProperty({ 
        description: 'Booking status',
        enum: BookingStatusEnum,
        example: BookingStatusEnum.PENDING
    })
    @IsNotEmpty()
    @IsEnum(BookingStatusEnum)
    status: BookingStatusEnum

    @ApiProperty({
        description: 'Payment status',
        enum: BookingPaymentEnum,
        example: BookingPaymentEnum.PENDING
    })
    @IsNotEmpty()
    @IsEnum(BookingPaymentEnum)
    paymentStatus: BookingPaymentEnum
}
