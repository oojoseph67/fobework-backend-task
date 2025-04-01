import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { Artist, ArtistSchema } from 'src/artist/entities/artist.entity';
import { Argon2Provider } from 'src/auth/providers/argon2.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, Argon2Provider],
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
