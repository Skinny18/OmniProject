import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../lib/base/service.base';
import { Project } from './entity/project.entity';
import { ProjectDTO } from './dto/project.dto';

@Injectable()
export class ProjectService extends BaseService<Project, ProjectDTO> {
  constructor(@InjectRepository(Project) projectRepo: Repository<Project>) {
    super('project', projectRepo);
  }
}
