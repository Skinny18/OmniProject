import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseModel {
  @PrimaryGeneratedColumn('increment')
  id: string;
  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  createdAt: Date;
}
