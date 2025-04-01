import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  User = 'user',
  ORGANIZER = 'organizer',
}

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop({
    type: String,
    enum: UserRole,
    default: UserRole.User,
  })
  role?: UserRole;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
