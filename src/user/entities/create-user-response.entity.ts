import { ApiProperty } from '@nestjs/swagger';
import { CreateUserEntity } from './create-user.entity';

export class CreateUserResponseEntity {
  @ApiProperty({
    description: 'user',
  })
  user: CreateUserEntity;
}
