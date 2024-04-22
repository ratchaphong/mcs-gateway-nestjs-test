import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/utils/contanst';
import { AddressDto } from '../dto/address-dto';

export class UserEntity {
  @ApiProperty({
    description: 'User ID',
    example: 'userId',
  })
  userId: string;

  @ApiProperty({
    description: 'Email',
    example: 'email',
  })
  email: string;

  @ApiProperty({
    description: 'Username',
    example: 'username',
  })
  username: string;

  @ApiProperty({
    description: 'Password',
    example: 'password',
  })
  password: string;

  @ApiProperty({
    description: 'Phone',
    example: 'phone',
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
