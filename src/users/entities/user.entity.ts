import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export enum UserRole  {
    User = 'User',
    ORGANIZER = 'organizer'
}

@Schema()
export class User extends Document {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  email: string;

  @Prop({
    type: String,
    required: true,
  })
  password: string;

  @Prop({
    type: UserRole,
    required: true,
  })
  role: string;

  @Prop({
    type: Date,
    required: true,
  })
  createdAt: Date;
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
