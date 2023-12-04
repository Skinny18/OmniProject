import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../lib/base/service.base';
import { Profile } from './entity/profile.entity';
import { ProfileDTO } from './dto/profile.dto';

@Injectable()
export class ProfileService extends BaseService<Profile, ProfileDTO> {
  constructor(@InjectRepository(Profile) profileRepo: Repository<Profile>) {
    super('profile', profileRepo);
  }
}
