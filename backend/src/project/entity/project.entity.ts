import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseModel } from 'src/lib/base/model.base';
import { Task } from 'src/task/entity/task.entity';
import { Employee } from 'src/employee/entity/employee.entity';

@Entity()
export class Project extends BaseModel {
  @Column({ type: 'text' })
  title: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'integer' })
  progress: number;
  @Column({ type: 'date' })
  startDate: Date;
  @Column({ type: 'date', nullable: true })
  dueDate: Date;
  @Column({ type: 'integer' })
  estimatedTime: number;
  @Column({ type: 'integer' })
  totalUsedTime: number;
  @Column({ type: 'integer' })
  extraTime: number;
  @Column({ type: 'text' })
  status: string;
  @OneToOne(() => Employee)
  @JoinColumn()
  owner: Employee;
  @OneToMany(() => Task, (task) => task.project, { cascade: true })
  tasks: Task[];
  /*@ManyToMany(() => Employee, (team) => team.projects, { cascade: true })
  team: Employee[]; */
}
