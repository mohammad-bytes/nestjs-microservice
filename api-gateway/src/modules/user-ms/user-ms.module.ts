import { Module } from '@nestjs/common';
import { UserMsService } from './user-ms.service';
import { UserMsController } from './user-ms.controller';

@Module({
  controllers: [UserMsController],
  providers: [UserMsService],
})
export class UserMsModule {}
