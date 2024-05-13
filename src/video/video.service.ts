import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { VideoDto } from './video.dto';

@Injectable()
export class VideoService {
  constructor(private prisma: PrismaService) {}

  getVideo() {
    return this.prisma.video.findMany();
  }

  getVideoById(id: string) {
    return this.prisma.video.findUnique({
      where: { id },
    });
  }

  createVideo(dto: VideoDto) {
    return this.prisma.video.create({
      data: {
        name: dto.name,
        description: dto.description,
        videoUrl: dto.videoUrl,
      },
    });
  }
}
