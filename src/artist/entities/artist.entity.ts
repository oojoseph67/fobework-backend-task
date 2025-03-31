import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Artist extends Document {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  userId: string;

  @Prop({
    type: String,
    required: true,
  })
  stageName: string;

  @Prop({
    type: [String],
    required: true,
  })
  genre: string[];

  @Prop({
    type: String,
    required: true,
  })
  bio: string;

  @Prop({
    type: Boolean,
    required: true,
  })
  availability: boolean;

  @Prop({
    type: Number,
    required: true,
  })
  rate: number;

  @Prop({
    type: [String],
    required: true,
  })
  socialLinks: string[];

  @Prop({
    type: [String],
    required: true,
  })
  media: string[]; // streaming platforms

  @Prop({
    type: Date,
    required: true,
    default: Date.now,
  })
  createdAt: Date;
}

export type ArtistDocument = HydratedDocument<Artist>;

export const ArtistSchema = SchemaFactory.createForClass(Artist);
