import { Controller } from '@nestjs/common';
import { UserMsService } from './user-ms.service';

@Controller('user-ms')
export class UserMsController {
  constructor(private readonly userMsService: UserMsService) {}
}
