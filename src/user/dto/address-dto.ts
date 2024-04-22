import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @ApiProperty({
    required: true,
    description: 'Street',
    default: 'street',
  })
  street: string;

  @ApiProperty({
    required: true,
    description: 'City',
    default: 'city',
  })
  city: string;

  @ApiProperty({
    required: true,
    description: 'State',
    default: 'state',
  })
  state: string;

  @ApiProperty({
    required: true,
    description: 'Country',
    default: 'country',
  })
  country: string;

  @ApiProperty({
    required: true,
    description: 'Postcode',
    default: 'postcode',
  })
  postcode: string;
}
