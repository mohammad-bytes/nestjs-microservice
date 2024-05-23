import { Module } from '@nestjs/common';
import { AuthMsService } from './auth-ms.service';
import { AuthMsController } from './auth-ms.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICRO_SERVICE } from 'src/utils/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICRO_SERVICE.AUTH_MS.NAME,
        transport: Transport.TCP,
        options: {
          port: MICRO_SERVICE.AUTH_MS.TCP_PORT,
          host: MICRO_SERVICE.AUTH_MS.TCP_HOST
        }
      }
    ])
  ],
  controllers: [AuthMsController],
  providers: [AuthMsService],
})
export class AuthMsModule { }
