import { ApiProperty } from '@nestjs/swagger';
import { EmployeeDTO } from 'src/employee/dto/employee.dto';
import { BaseDTO } from 'src/lib/base/dto.base';
import { ProjectDTO } from 'src/project/dto/project.dto';
import { SubTaskDTO } from 'src/sub-task/dto/sub-task.dto';
import { Task } from '../entity/task.entity';

export class TaskDTO extends BaseDTO {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  startDate: Date;
  @ApiProperty()
  dueDate: Date;
  @ApiProperty()
  estimatedTime: number;
  @ApiProperty()
  totalUsedTime: number;
  @ApiProperty()
  extraTime: number;
  @ApiProperty()
  status: string;
  @ApiProperty({ type: () => EmployeeDTO })
  assignedTo: EmployeeDTO;
  @ApiProperty({ type: () => ProjectDTO })
  project: ProjectDTO;
  @ApiProperty({ type: () => [SubTaskDTO] })
  subTasks: SubTaskDTO[];
  static toModel(dto): Task {
    if (!dto) {
      return undefined;
    }
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      startDate: dto.startDate,
      dueDate: dto.dueDate,
      estimatedTime: dto.estimatedTime,
      totalUsedTime: dto.totalUsedTime,
      extraTime: dto.extraTime,
      status: dto.status,
      project: dto.project,
      assignedTo: EmployeeDTO.toModel(dto.assignedTo),
      subTasks: dto.subTasks?.map((subtask) => subtask.toModel()),
      createdAt: dto.createdAt,
    };
  }
}
