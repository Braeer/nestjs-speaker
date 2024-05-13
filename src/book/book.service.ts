import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BookDto } from './book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async getBooks() {
    this.prisma.book.findMany();
  }

  async getBook(id: string) {
    return this.prisma.book.findUnique({
      where: { id },
    });
  }

  async createBook(dto: BookDto) {
    return this.prisma.book.create({
      data: {
        name: dto.name,
        description: dto.description,
        imageUrl: dto.imageUrl,
      },
    });
  }
}
