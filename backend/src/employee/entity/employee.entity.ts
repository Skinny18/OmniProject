import { BaseModel } from 'src/lib/base/model.base';
import { User } from 'src/user/entity/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Employee extends BaseModel {
  constructor() {
    super();
  }
  @Column({ type: 'text' })
  name: string;
  @OneToOne(() => User, { cascade: true, eager: true })
  @JoinColumn({ foreignKeyConstraintName: 'employee' })
  user: User;
}
