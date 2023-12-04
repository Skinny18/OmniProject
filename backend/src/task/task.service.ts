import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../lib/base/service.base';
import { Task } from './entity/task.entity';
import { TaskDTO } from './dto/task.dto';

@Injectable()
export class TaskService extends BaseService<Task, TaskDTO> {
  constructor(@InjectRepository(Task) taskRepo: Repository<Task>) {
    super('task', taskRepo);
  }
}
