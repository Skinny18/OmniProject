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
import { EmployeeService } from './employee.service';
import { EmployeeDTO } from './dto/employee.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('employee')
@Controller('employee')
@UsePipes(new ValidationPipe({ transform: true }))
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployeeDto: EmployeeDTO) {
    return this.employeeService.create(EmployeeDTO.toModel(createEmployeeDto));
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: EmployeeDTO) {
    return this.employeeService.update(
      id,
      EmployeeDTO.toModel(updateEmployeeDto),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.delete(id);
  }
}
