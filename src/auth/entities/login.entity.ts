import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseEntity {
  @ApiProperty({
    description: 'Token',
    default: 'token',
  })
  token: string;
}
