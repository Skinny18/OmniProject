import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '../../lib/base/dto.base';
import { Profile } from '../entity/profile.entity';

export class ProfileDTO extends BaseDTO {
  @ApiProperty()
  user: string;
  @ApiProperty()
  role: string;

  static toModel(dto): Profile {
    return {
      id: dto.id,
      user: dto.user,
      role: dto.role,
      createdAt: dto.createdAt,
    };
  }
}
