import { IsOptional, IsString, IsUrl } from 'class-validator';

export class VideoDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsUrl()
  videoUrl: string;
}
