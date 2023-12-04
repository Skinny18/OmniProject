import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '../../lib/base/dto.base';
import { Logging } from '../entity/logging.entity';

export class LoggingDTO extends BaseDTO {
  @ApiProperty()
  taskId: string;
  @ApiProperty()
  lastModified: Date;
  @ApiProperty()
  modifiedBy: string;
  static toModel(dto): Logging {
    return {
      id: dto.id,
      taskId: dto.taskId,
      modifiedBy: dto.modifiedBy,
      lastModified: dto.lastModified,
      createdAt: dto.createdAt,
    };
  }
}
