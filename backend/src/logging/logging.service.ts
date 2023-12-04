import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../lib/base/service.base';
import { Logging } from './entity/logging.entity';
import { LoggingDTO } from './dto/logging.dto';

@Injectable()
export class LoggingService extends BaseService<Logging, LoggingDTO> {
  constructor(@InjectRepository(Logging) loggingRepo: Repository<Logging>) {
    super('logging', loggingRepo);
  }
}
