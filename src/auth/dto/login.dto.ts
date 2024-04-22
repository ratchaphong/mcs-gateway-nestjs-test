import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    required: true,
    description: 'Username',
    default: 'username',
  })
  username: string;

  @ApiProperty({
    required: true,
    description: 'Password',
    default: 'password',
  })
  password: string;
}
