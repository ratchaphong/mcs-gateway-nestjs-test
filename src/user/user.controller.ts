import {
  Body,
  Controller,
  Inject,
  Get,
  Patch,
  Post,
  BadRequestException,
  NotFoundException,
  UseGuards,
  Request,
  UseFilters,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import {
  ApiTags,
  ApiBody,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserResponseEntity } from './entities/create-user-response.entity';
import { SearchUsersResponseEntity } from './entities/search-users-response.entity';
import { SearchUserResponseEntity } from './entities/search-user-response.entity';
import { GetTokenDto } from './dto/get-token.dto';
// import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Public } from 'src/utils/jwt.decorator';
import { Roles } from 'src/utils/role.decorator';
import { Role } from 'src/utils/contanst';

@Controller({ version: '1', path: 'user' })
@ApiTags('User')
@ApiBearerAuth()
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  @Get('profile')
  // @UseGuards(JwtAuthGuard)
  // if you do not use provide : APP_GUARD and useClass: JwtAuthGuard.
  // you have to use UseGuards(JwtAuthGuard) on the path.
  @ApiOkResponse({
    type: SearchUserResponseEntity,
    description: 'Try it out',
  })
  @ApiBadRequestResponse({
    description:
      'The server cannot or will not process the request due to something that is perceived to be a client error.',
  })
  async findOne(@Request() req): Promise<Observable<SearchUserResponseEntity>> {
    try {
      const { sub } = req.user;
      let userId: string = sub;
      return this.userServiceClient.send({ cmd: 'get_profile' }, userId);
    } catch (error) {
      console.error('Error occurred:', error);
      throw new RpcException('Internal server error');
    }
  }

  @Get()
  @Roles(Role.Admin)
  @ApiOkResponse({
    type: SearchUsersResponseEntity,
    description: 'Retrieve all users (Admin only)',
  })
  @ApiBadRequestResponse({
    description:
      'The server cannot or will not process the request due to something that is perceived to be a client error.',
  })
  async findAll(): Promise<Observable<SearchUsersResponseEntity>> {
    return this.userServiceClient.send({ cmd: 'get_profiles' }, {});
  }

  @Post()
  @Public()
  @ApiBody({
    type: CreateUserDto,
    description: 'Try it out',
  })
  @ApiCreatedResponse({
    type: CreateUserResponseEntity,
    description: 'Try it out',
  })
  @ApiBadRequestResponse({
    description:
      'The server cannot or will not process the request due to something that is perceived to be a client error.',
  })
  async create(
    @Body() request: CreateUserDto,
  ): Promise<Observable<CreateUserResponseEntity>> {
    return this.userServiceClient.send({ cmd: 'create_user' }, request);
  }

  @Post('token')
  @Public()
  @ApiBody({
    type: GetTokenDto,
    description: 'Try it out',
  })
  @ApiOkResponse({
    type: String,
    description: 'Try it out',
  })
  @ApiBadRequestResponse({
    description:
      'The server cannot or will not process the request due to something that is perceived to be a client error.',
  })
  async getToken(@Body() request: GetTokenDto): Promise<Observable<string>> {
    return this.userServiceClient.send({ cmd: 'token' }, request);
  }

  // @Patch()
  // @ApiOkResponse({
  //   type: SearchUserResponseEntity,
  //   description: 'Try it out',
  // })
  // @ApiBody({
  //   type: UpdateUserDto,
  //   description: 'Try it out',
  // })
  // @ApiBadRequestResponse({
  //   description:
  //     'The server cannot or will not process the request due to something that is perceived to be a client error.',
  // })
  // async editProfile(
  //   @Body() request: UpdateUserDto,
  // ): Promise<Observable<SearchUserResponseEntity>> {
  //   return this.userServiceClient.send({ cmd: 'update_profile' }, request);
  // }
}
