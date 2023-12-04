import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../lib/base/model.base';

@Entity()
export class Logging extends BaseModel {
  @Column({ type: 'text' })
  taskId: string;
  @Column({ type: 'date' })
  lastModified: Date;
  @Column({ type: 'text' })
  modifiedBy: string;
}
