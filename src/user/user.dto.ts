import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class UserDto {
  @IsOptional()
  @IsEmail()
  email: string;

  @IsString()
  @Min(6, {
    message: 'Пароль должен содержать не менее 6 символов',
  })
  password: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  surname: string;

  @IsNumber()
  @IsOptional()
  age: number;

  @IsOptional()
  @IsEnum(['MALE', 'FEMALE'])
  gender: string;

  @IsString()
  @IsOptional()
  avatarUrl: string;
}
