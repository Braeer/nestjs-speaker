import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { VideoDto } from './video.dto';

@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @HttpCode(200)
  @Get()
  @Auth()
  async getVideo() {
    return this.videoService.getVideo();
  }

  @HttpCode(200)
  @Get(':id')
  @Auth()
  async getVideoById(@Param('id') id: string) {
    return this.videoService.getVideoById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @Auth()
  @HttpCode(200)
  async createVideo(@Body() dto: VideoDto) {
    return this.videoService.createVideo(dto);
  }
}
