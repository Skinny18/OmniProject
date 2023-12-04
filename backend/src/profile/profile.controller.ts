import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileDTO } from './dto/profile.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('profile')
@Controller('profile')
@UsePipes(new ValidationPipe({ transform: true }))
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() createProfileDto: ProfileDTO) {
    return this.profileService.create(ProfileDTO.toModel(createProfileDto));
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: ProfileDTO) {
    return this.profileService.update(id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.delete(id);
  }
}
