import { OmitType } from '@nestjs/swagger';
import { UserEntity } from './user.entity';

export class SearchUsersEntity extends OmitType(UserEntity, [
  'username',
  'password',
  'role',
]) {}
