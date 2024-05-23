import { Request, Controller, Post, Body, UseFilters } from '@nestjs/common';
import { AuthMsService } from './auth-ms.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth-ms')
@ApiTags('Authentication')
@ApiBearerAuth('JWT-auth')
export class AuthMsController {
  constructor(private readonly authMsService: AuthMsService) { }

  @Post('/sign-in')
  @ApiBody({ type: SignInDto })
  @ApiOperation({ description: 'This is signIn api' })
  signIn(
    @Request() req: { log: object; user: any },
    @Body() body: SignInDto
  ) {
    return this.authMsService.signIn(req, body);
  }

  @Post('/sign-up')
  @ApiBody({ type: SignUpDto })
  @ApiOperation({ description: 'This is signUp api' })
  signUp(
    @Request() req: { log: object; user: any },
    @Body() body: SignUpDto
  ) {
    return this.authMsService.signUp(req, body);
  }
}
