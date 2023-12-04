import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../lib/base/service.base';
import { Employee } from './entity/employee.entity';
import { EmployeeDTO } from './dto/employee.dto';

@Injectable()
export class EmployeeService extends BaseService<Employee, EmployeeDTO> {
  constructor(@InjectRepository(Employee) employeeRepo: Repository<Employee>) {
    super('employee', employeeRepo);
  }
}
