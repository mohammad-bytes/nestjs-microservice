import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MICRO_SERVICE } from 'src/utils/constants';
import { IPayload } from 'src/utils/interfaces/payload.interface';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @MessagePattern({ cmd: MICRO_SERVICE.SERVICE.EVENT.AUTH.SIGNIN })
  signIn(@Payload() payload: IPayload) {
    return this.authService.signIn(payload);
  }


  @MessagePattern({ cmd: MICRO_SERVICE.SERVICE.EVENT.AUTH.SIGNUP })
  signUp(@Payload() payload: IPayload) {
    return this.authService.signUp(payload);
  }
}
