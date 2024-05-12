import { IsEmail, IsNumber, IsString, Min, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;

  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  gender: 'MALE' | 'FEMALE';

  @IsNumber()
  @Min(14)
  age: number;
}
