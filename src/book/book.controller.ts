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
import { BookService } from './book.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { BookDto } from './book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  @Auth()
  async getBooks() {
    return this.bookService.getBooks();
  }

  @Get(':id')
  @Auth()
  async getBook(@Param('id') id: string) {
    return this.bookService.getBook(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(200)
  @Auth()
  async createBook(@Body() dto: BookDto) {
    return this.bookService.createBook(dto);
  }
}
