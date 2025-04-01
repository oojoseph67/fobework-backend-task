import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './entities/event.entity';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { Artist, ArtistSchema } from 'src/artist/entities/artist.entity';
import { ArtistModule } from 'src/artist/artist.module';

@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Event.name,
        schema: EventSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Artist.name,
        schema: ArtistSchema,
      },
    ]),

    ArtistModule,
  ],
  exports: [EventsService]
})
export class EventsModule {}
