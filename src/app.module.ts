import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TestsModule } from './testsService/tests.module';
import { VideoModule } from './video/video.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, TestsModule, VideoModule, BookModule],
})
export class AppModule {}
