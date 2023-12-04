import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../lib/base/service.base';
import { SubTask } from './entity/sub-task.entity';
import { SubTaskDTO } from './dto/sub-task.dto';

@Injectable()
export class SubTaskService extends BaseService<SubTask, SubTaskDTO> {
  constructor(@InjectRepository(SubTask) subTaskRepo: Repository<SubTask>) {
    super('sub-task', subTaskRepo);
  }
}
