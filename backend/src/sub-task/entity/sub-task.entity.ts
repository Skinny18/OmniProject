import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../lib/base/model.base';
import { Task } from 'src/task/entity/task.entity';

@Entity()
export class SubTask extends BaseModel {
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'integer' })
  workedTime: number;
  @ManyToOne(() => Task, (task) => task.subTasks, { lazy: true })
  task: Task;
}
