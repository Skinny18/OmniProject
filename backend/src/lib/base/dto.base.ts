import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  createdAt: Date;
}
