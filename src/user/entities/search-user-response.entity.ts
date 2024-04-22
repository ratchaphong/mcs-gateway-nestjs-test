import { ApiProperty } from '@nestjs/swagger';
import { SearchUserEntity } from './search-user.entity';

export class SearchUserResponseEntity {
  @ApiProperty({
    description: 'User information',
  })
  user: SearchUserEntity;
}
