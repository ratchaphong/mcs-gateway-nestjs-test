import { ApiProperty } from '@nestjs/swagger';

export class GetTokenDto {
  @ApiProperty({
    required: false,
    description: 'Email',
    default: 'email',
  })
  email: string;
}
