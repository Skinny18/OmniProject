import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { LoggingService } from './logging.service';
import { LoggingDTO } from './dto/logging.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('logging')
@Controller('logging')
@UsePipes(new ValidationPipe({ transform: true }))
export class LoggingController {
  constructor(private readonly loggingService: LoggingService) {}

  @Post()
  create(@Body() createLoggingDto: LoggingDTO) {
    return this.loggingService.create(createLoggingDto);
  }

  @Get()
  findAll() {
    return this.loggingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loggingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoggingDto: LoggingDTO) {
    return this.loggingService.update(id, updateLoggingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loggingService.delete(id);
  }
}
