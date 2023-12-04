import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/project.module';
import { ProfileModule } from './profile/profile.module';
import { EmployeeModule } from './employee/employee.module';
import { LoggingModule } from './logging/logging.module';
import { SubTaskModule } from './sub-task/sub-task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'omni_db',
      //entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    TaskModule,
    ProjectModule,
    ProfileModule,
    EmployeeModule,
    LoggingModule,
    SubTaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
