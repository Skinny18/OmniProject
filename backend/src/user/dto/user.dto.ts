import { UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from 'src/lib/base/dto.base';
import { User } from '../entity/user.entity';
export class UserDTO extends BaseDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  createdAt: Date;
  @UsePipes(new ValidationPipe({ transform: true }))
  static toModel(dto): User {
    return {
      id: dto.id,
      name: dto.name,
      email: dto.email,
      password: dto.password,
      phone: dto.phone,
      createdAt: dto.createdAt,
    };
  }
}
