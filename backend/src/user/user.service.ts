import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../lib/base/service.base';

import { UserDTO } from './dto/user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService extends BaseService<User, UserDTO> {
  constructor(@InjectRepository(User) userRepo: Repository<User>) {
    super('user', userRepo);
  }
}
