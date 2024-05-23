import { Module } from '@nestjs/common';
import { AuthMsModule } from './modules/auth-ms/auth-ms.module';
import { UserMsModule } from './modules/user-ms/user-ms.module';

@Module({
  imports: [
    AuthMsModule,
    UserMsModule
  ],
})
export class AppModule { }
