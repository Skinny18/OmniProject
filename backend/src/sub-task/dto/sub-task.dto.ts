import { ApiProperty } from '@nestjs/swagger';
import { EmployeeDTO } from 'src/employee/dto/employee.dto';
import { TaskDTO } from 'src/task/dto/task.dto';
import { Task } from 'src/task/entity/task.entity';
import { BaseDTO } from '../../lib/base/dto.base';
import { SubTask } from '../entity/sub-task.entity';

export class SubTaskDTO extends BaseDTO {
  @ApiProperty()
  description: string;
  @ApiProperty()
  workedTime: number;
  @ApiProperty({ type: () => EmployeeDTO })
  employee: EmployeeDTO;
  @ApiProperty({ type: () => TaskDTO })
  task: TaskDTO;
  static toModel(dto): SubTask {
    return {
      id: dto.id,
      description: dto.description,
      workedTime: dto.workedTime,
      createdAt: dto.createdAt,
      task: TaskDTO.toModel(dto.task),
    };
  }
}
