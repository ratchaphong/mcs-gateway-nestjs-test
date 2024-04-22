import { ApiProperty, OmitType } from '@nestjs/swagger';
import { UserEntity } from './user.entity';

export class CreateUserEntity extends OmitType(UserEntity, [
  'username',
  'password',
]) {
  @ApiProperty({
    required: false,
    description: 'Remark',
    example: 'remark',
  })
  remark: string;
}
