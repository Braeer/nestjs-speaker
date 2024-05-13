import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TestDto } from './test.dto';

@Injectable()
export class TestsService {
  constructor(private prisma: PrismaService) {}

  getTests() {
    return this.prisma.tests.findMany();
  }

  getTest(id: string) {
    return this.prisma.tests.findUnique({
      where: { id },
    });
  }

  createTest(dto: TestDto) {
    return this.prisma.tests.create({
      data: {
        name: dto.name,
        description: dto.description,
        questionsCount: dto.questionsCount,
      },
    });
  }
}
