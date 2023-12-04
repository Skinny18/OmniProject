import { UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { BaseDTO } from 'src/lib/base/dto.base';
import { UserDTO } from 'src/user/dto/user.dto';
import { Employee } from '../entity/employee.entity';

@UsePipes(new ValidationPipe({ transform: true }))
export class EmployeeDTO extends BaseDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  user?: UserDTO;

  static toModel(dto): Employee {
    if (!dto) {
      return undefined;
    }
    return {
      id: dto.id,
      name: dto.name,
      user: dto.user ? UserDTO.toModel(dto.user) : undefined,
      createdAt: dto.createdAt,
    };
  }
}
