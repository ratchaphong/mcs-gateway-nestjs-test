import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  ApiTags,
  ApiBody,
  ApiBadRequestResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { LoginDto } from './dto/login.dto';
import { LoginResponseEntity } from './entities/login.entity';

@Controller({ version: '1', path: 'auth' })
@ApiTags('Auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authServiceClient: ClientProxy,
  ) {}

  @Post('login')
  @ApiBody({
    type: LoginDto,
    description: 'Try it out',
  })
  @ApiCreatedResponse({
    type: LoginResponseEntity,
    description: 'Successfully',
  })
  @ApiBadRequestResponse({
    description:
      'The server cannot or will not process the request due to something that is perceived to be a client error.',
  })
  async login(
    @Body() request: LoginDto,
  ): Promise<Observable<LoginResponseEntity>> {
    return this.authServiceClient.send({ cmd: 'login' }, request);
  }

  @Post('reset')
  @ApiBody({
    type: ResetPasswordDto,
    description: 'Try it out',
  })
  @ApiBadRequestResponse({
    description:
      'The server cannot or will not process the request due to something that is perceived to be a client error.',
  })
  async reset(@Body() request: ResetPasswordDto): Promise<Observable<string>> {
    return this.authServiceClient.send({ cmd: 'reset_password' }, request);
  }
}
