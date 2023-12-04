import { Column, Entity } from 'typeorm';
import { BaseModel } from 'src/lib/base/model.base';

@Entity()
export class Profile extends BaseModel {
  @Column({ type: 'text' })
  user: string;
  @Column({ type: 'text' })
  role: string;
}
