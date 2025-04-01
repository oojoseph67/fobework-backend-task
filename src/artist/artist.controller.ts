import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('artists')
@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new artist' })
  @ApiResponse({ status: 201, description: 'Artist successfully created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistService.create(createArtistDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all artists' })
  @ApiResponse({ status: 200, description: 'List of all artists' })
  getAllArtists() {
    return this.artistService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.artistService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateArtistDto: UpdateArtistDto) {
  //   return this.artistService.update(+id, updateArtistDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.artistService.remove(+id);
  // }
}
