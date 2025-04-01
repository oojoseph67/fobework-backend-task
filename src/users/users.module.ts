import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { BcryptProvider } from '../auth/providers/bcrypt.provider';
import { Artist, ArtistSchema } from 'src/artist/entities/artist.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService, BcryptProvider],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Artist.name,
        schema: ArtistSchema,
      },
    ]),
  ],
  exports: [UsersModule, UsersService],
})
export class UsersModule {}
