import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the Fobework Backend API - A NestJS Implementation. By Joseph';
  }
}
