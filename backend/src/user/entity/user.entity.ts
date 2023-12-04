import { BaseModel } from '../../lib/base/model.base';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseModel {
  @Column({ type: 'text' })
  name: string;
  @Column({ type: 'text' })
  email: string;
  @Column({ type: 'text' })
  phone: string;
  @Column({ type: 'text' })
  password: string;
}
