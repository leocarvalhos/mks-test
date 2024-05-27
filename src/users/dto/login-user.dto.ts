import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    example: 'lucas_silveira',
    description: 'Nome ou apelido do usuário',
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: 'lucas123',
    description: 'Senha do usuário',
  })
  @IsString()
  password: string;
}
