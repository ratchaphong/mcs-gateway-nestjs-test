import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordDto {
  @ApiProperty({
    required: true,
    description: 'Email',
    default: 'email',
  })
  email: string;
}
