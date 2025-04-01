import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Event extends Document {
  @ApiProperty({ description: 'Event organizer reference' })
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  organizerId: string;

  @ApiProperty({ description: 'Event name' })
  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  name: string;

  @ApiProperty({ description: 'Event location' })
  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  location: string;

  @ApiProperty({ description: 'Event date and time' })
  @Prop({
    type: Date,
    required: true,
  })
  date: Date;

  @ApiProperty({ description: 'Event number of tickets' })
  @Prop({
    type: Number,
    required: true,
    min: 0,
  })
  numberOfTickets: number;

  // @ApiProperty({ description: 'List of artists performing at the event' })
  // @Prop({
  //   type: [
  //     {
  //       type: MongooseSchema.Types.ObjectId,
  //       ref: 'Artist',
        
  //     },
  //   ],
  //   default: [],
  // })
  // artists: string[];

  @ApiProperty({ description: 'Event creation timestamp' })
  @Prop({
    type: Date,
    default: Date.now,
  })
  createdAt: Date;

  @ApiProperty({ description: 'Event last update timestamp' })
  @Prop({
    type: Date,
    default: Date.now,
  })
  updatedAt: Date;
}

export type EventDocument = HydratedDocument<Event>;

export const EventSchema = SchemaFactory.createForClass(Event);
