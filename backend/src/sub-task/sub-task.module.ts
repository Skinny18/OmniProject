import { Module } from '@nestjs/common';
import { SubTaskService } from './sub-task.service';
import { SubTaskController } from './sub-task.controller';
import { SubTask } from './entity/sub-task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubTask])],
  controllers: [SubTaskController],
  providers: [SubTaskService],
})
export class SubTaskModule {}
