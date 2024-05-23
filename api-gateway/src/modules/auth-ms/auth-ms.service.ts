import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { MICRO_SERVICE } from 'src/utils/constants';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthMsService {
    constructor(
        @Inject(MICRO_SERVICE.AUTH_MS.NAME)
        private readonly authServiceClient: ClientProxy
    ) { }


    signIn(req: { log: object; user: any }, body: SignInDto) {
        try {
            return firstValueFrom(this.authServiceClient.send(
                { cmd: MICRO_SERVICE.AUTH_MS.EVENTS.SIGNIN },
                { log: req.log, data: body }
            ))
        } catch (error) {
            console.log("🚀 ~ AuthMsService ~ login ~ error:", error)
        }
    }

    signUp(req: { log: object; user: any }, body: SignUpDto) {
        try {
            return firstValueFrom(this.authServiceClient.send(
                { cmd: MICRO_SERVICE.AUTH_MS.EVENTS.SIGNUP },
                { log: req.log, data: body }
            ))
        } catch (error) {
            console.log("🚀 ~ AuthMsService ~ login ~ error:", error)
        }
    }


}
