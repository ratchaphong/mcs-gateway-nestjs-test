import { OmitType } from '@nestjs/swagger';
import { UserEntity } from './user.entity';

export class SearchUserEntity extends OmitType(UserEntity, [
  'username',
  'password',
]) {}
