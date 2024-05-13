import { IsString, IsUrl } from 'class-validator';

export class BookDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsUrl()
  imageUrl: string;
}
