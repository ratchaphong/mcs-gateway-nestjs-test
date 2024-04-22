import { ApiProperty } from '@nestjs/swagger';
import { SearchUsersEntity } from './search-users.entity';

export class SearchUsersResponseEntity {
  @ApiProperty({
    description: 'users',
    type: SearchUsersEntity,
    isArray: true,
  })
  users: SearchUsersEntity[];
}
