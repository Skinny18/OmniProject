import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from 'src/lib/base/model.base';
import { Employee } from 'src/employee/entity/employee.entity';
import { Project } from 'src/project/entity/project.entity';
import { SubTask } from 'src/sub-task/entity/sub-task.entity';

@Entity()
export class Task extends BaseModel {
  @Column({ type: 'text' })
  title: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'date' })
  startDate: Date;
  @Column({ type: 'date' })
  dueDate: Date;
  @Column({ type: 'integer' })
  estimatedTime: number;
  @Column({ type: 'integer' })
  totalUsedTime: number;
  @Column({ type: 'integer' })
  extraTime: number;
  @Column({ type: 'text' })
  status: string;
  @ManyToOne(() => SubTask, (subtask) => subtask.task)
  subTasks: SubTask[];
  @ManyToOne(() => Employee)
  assignedTo: Employee;
  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;
}
