import { ApiProperty } from '@nestjs/swagger';
import { EmployeeDTO } from 'src/employee/dto/employee.dto';
import { BaseDTO } from 'src/lib/base/dto.base';
import { TaskDTO } from 'src/task/dto/task.dto';
import { Project } from '../entity/project.entity';

export class ProjectDTO extends BaseDTO {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  progress: number;
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
  owner: EmployeeDTO;
  @ApiProperty({ type: [TaskDTO] })
  tasks: Array<TaskDTO>;
  static toModel(dto): Project {
    if (dto) {
      return {
        id: dto.id,
        title: dto.title,
        description: dto.description,
        progress: dto.progress,
        startDate: new Date(dto.startDate),
        dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
        estimatedTime: dto.estimatedTime,
        totalUsedTime: dto.totalUsedTime,
        extraTime: dto.extraTime,
        status: dto.status,
        owner: EmployeeDTO.toModel(dto.owner),
        tasks: dto.tasks?.map((task) => TaskDTO.toModel(task)),
        createdAt: dto.createdAt,
      };
    } else {
      return undefined;
    }
  }
}
