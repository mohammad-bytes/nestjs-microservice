import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPayload } from 'src/utils/interfaces/payload.interface';
import { UserAccount } from './schema/user-account.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ResponseFormatter } from 'src/utils/response-formatter';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(UserAccount.name)
        private readonly userAccountModel: Model<UserAccount>
    ) { }

    public async signIn(payload: IPayload): Promise<any> {
        try {
            const { log, data } = payload;
            const user = await this.userAccountModel.findOne({ email: data.email.trim() });
            if (!user) {
                throw new UnauthorizedException('Invalid login Credentials')
            }
            const isPassword = await bcrypt.compare(data.password, user.password);
            if (!isPassword) {
                throw new UnauthorizedException('Invalid login Credentials')
            }
            return new ResponseFormatter(HttpStatus.ACCEPTED, 'SIGNIN_SUCCESS', null, null);
        } catch (error) {
            throw new RpcException({ message: error.message, statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR })
        }
    }

    public async signUp(payload: IPayload): Promise<any> {
        try {
            const { log, data } = payload;
            const userAccount = new UserAccount();
            userAccount.firstName = data.firstName;
            userAccount.lastName = data.lastName;
            userAccount.email = data.email;
            userAccount.password = await this.hashPassword(data.password);
            const result = await this.userAccountModel.create(userAccount);

            return new ResponseFormatter(HttpStatus.CREATED, 'SIGNUP_SUCCESS', null, result);
        } catch (error) {
            throw new RpcException({ message: error.message, statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR })
        }
    }

    private async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt)
    }
}
