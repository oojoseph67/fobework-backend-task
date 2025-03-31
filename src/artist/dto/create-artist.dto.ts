import {
  IsNotEmpty,
  IsMongoId,
  IsString,
  IsArray,
  IsBoolean,
  IsNumber,
  ArrayMinSize,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArtistDto {
  @ApiProperty({ description: 'User ID reference' })
  @IsNotEmpty()
  @IsMongoId()
  userId: string;

  @ApiProperty({ description: 'Artist stage name' })
  @IsNotEmpty()
  @IsString()
  stageName: string;

  @ApiProperty({ description: 'Music genres', type: [String] })
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @IsNotEmpty()
  genre: string[];

  @ApiProperty({ description: 'Artist biography' })
  @IsNotEmpty()
  @IsString()
  bio: string;

  @ApiProperty({ description: 'Artist availability status' })
  @IsNotEmpty()
  @IsBoolean()
  availability: boolean;

  @ApiProperty({ description: 'Artist rate per performance' })
  @IsNotEmpty()
  @IsNumber()
  rate: number;

  @ApiProperty({ description: 'Social media links', type: [String] })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  socialLinks: string[];

  @ApiProperty({ description: 'Streaming platform links', type: [String] })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  media: string[];
}
