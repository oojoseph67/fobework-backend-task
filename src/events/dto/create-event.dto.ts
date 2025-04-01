import {
  IsNotEmpty,
  IsMongoId,
  IsString,
  IsDate,
  IsNumber,
  IsArray,
  Min,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({
    description: 'Event organizer ID',
    example: '507f1f77bcf86cd799439011',
  })
  @IsNotEmpty()
  @IsMongoId()
  organizerId: string;

  @ApiProperty({
    description: 'Event name',
    example: 'Summer Music Festival 2024',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Event location',
    example: 'Central Park, New York',
  })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({
    description: 'Event date and time',
    example: '2024-07-01T18:00:00.000Z',
  })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  date: Date;

  // @ApiProperty({
  //   description: 'Event budget in USD',
  //   example: 5000,
  //   minimum: 0,
  // })
  // @IsNotEmpty()
  // @IsNumber()
  // @Min(0)
  // budget: number;

  // @ApiProperty({
  //   description: 'Array of artist IDs',
  //   example: ['507f1f77bcf86cd799439011', '507f1f77bcf86cd799439012'],
  //   type: [String],
  // })
  // @IsOptional()
  // @IsArray()
  // @IsMongoId({ each: true })
  // artists: string[];
}
