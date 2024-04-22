import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/utils/contanst';
import { AddressDto } from './address-dto';

export class CreateUserDto {
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

  @ApiProperty({
    required: true,
    description: 'Email',
    default: 'email',
  })
  email: string;

  @ApiProperty({
    required: false,
    description: 'Phone',
    default: 'phone',
  })
  phone: string;

  @ApiProperty({
    required: false,
    description: 'Role',
    default: Role.User,
  })
  role: Role;

  @ApiProperty({
    required: false,
    description: 'Address',
    default: AddressDto,
  })
  address: AddressDto;
}
