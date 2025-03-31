import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ArtistModule } from './artist/artist.module';
import { EventsModule } from './events/events.module';
import { BookingModule } from './booking/booking.module';
import databaseConfig from './config/database.config';
import environmentValidation from './config/environmentValidation';

const ENV = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV === 'development' ? `.env.${ENV}.local` : `.env`,
      load: [databaseConfig],
      validationSchema: environmentValidation,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),

    UsersModule,

    ArtistModule,

    EventsModule,

    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
