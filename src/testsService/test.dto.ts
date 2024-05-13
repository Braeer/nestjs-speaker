import { IsNumber, IsString } from 'class-validator';

export class TestDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  questionsCount: number;
}
