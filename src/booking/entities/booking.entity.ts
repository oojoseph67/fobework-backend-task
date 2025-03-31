import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export enum BookingStatusEnum {
  Pending = 'pending',
  Confirmed = 'confirmed',
  Cancelled = 'cancelled',
}

export enum BookingPaymentEnum {
  Pending = 'pending',
  Paid = 'paid',
}

@Schema({ timestamps: true })
export class Booking {
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
    type: String,
    enum: Object.values(BookingStatusEnum),
    default: BookingStatusEnum.Pending,
  })
  status: BookingStatusEnum;

  @Prop({
    type: String,
    enum: Object.values(BookingPaymentEnum),
    default: BookingPaymentEnum.Pending,
  })
  paymentStatus: BookingPaymentEnum;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;
}

export type BookingDocument = HydratedDocument<Booking>;

export const BookingSchema = SchemaFactory.createForClass(Booking);
