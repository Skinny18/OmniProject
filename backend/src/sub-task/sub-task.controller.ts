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
import { SubTaskService } from './sub-task.service';
import { SubTaskDTO } from './dto/sub-task.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sub-task')
@Controller('sub-task')
@UsePipes(new ValidationPipe({ transform: true }))
export class SubTaskController {
  constructor(private readonly subTaskService: SubTaskService) {}

  @Post()
  create(@Body() createSubTaskDto: SubTaskDTO) {
    return this.subTaskService.create(SubTaskDTO.toModel(createSubTaskDto));
  }

  @Get()
  findAll() {
    return this.subTaskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subTaskService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubTaskDto: SubTaskDTO) {
    return this.subTaskService.update(id, updateSubTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subTaskService.delete(id);
  }
}
