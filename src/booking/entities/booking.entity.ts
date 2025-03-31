import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export enum BookingStatusEnum {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
}

export enum BookingPaymentEnum {
  PENDING = 'pending',
  PAID = 'paid',
}

@Schema()
export class Booking extends Document {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Artist',
    required: true,
  })
  artistId: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Event',
    required: true,
  })
  eventId: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  organizerId: string;

  @Prop({
    default: BookingStatusEnum.PENDING,
    type: BookingStatusEnum,
  })
  status: BookingStatusEnum;

  @Prop({
    default: BookingPaymentEnum.PENDING,
    type: BookingPaymentEnum,
  })
  paymentStatus: BookingPaymentEnum;

  @Prop({
    type: Date,
  })
  createdAt: Date;
}

export type BookingDocument = HydratedDocument<Booking>;

export const BookingSchema = SchemaFactory.createForClass(Booking);
