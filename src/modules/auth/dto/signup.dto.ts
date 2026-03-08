import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @ApiProperty({ example: 'test@test.com' })
  @IsEmail({}, { message: '올바른 이메일 형식이 아닙니다.' })
  email: string;

  @ApiProperty({ example: '12345678' })
  @IsString()
  @MinLength(6, { message: '최소 6자 이상이어야 합니다.' })
  @IsNotEmpty({ message: '비밀번호는 필수입니다.' })
  password: string;

  @ApiProperty({ example: '안중현' })
  @IsString()
  @MinLength(2, { message: '최소 2자 이상이어야 합니다.' })
  @IsNotEmpty({ message: '이름은 필수입니다.' })
  name: string;
}
