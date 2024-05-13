import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { completedTests: true },
    });
  }

  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(dto: AuthDto) {
    const user = {
      email: dto.email,
      name: dto.name,
      surname: dto.surname,
      age: dto.age,
      gender: dto.gender,
      avatarUrl: '',
      password: await hash(dto.password),
    };

    return this.prisma.user.create({
      data: user,
    });
  }

  async update(userId: string, dto: UserDto) {
    let data = dto;

    if (dto.password) {
      data = {
        ...dto,
        password: await hash(dto.password),
      };
    }

    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data,
      select: {
        email: true,
        name: true,
        surname: true,
        age: true,
        gender: true,
        avatarUrl: true,
      },
    });
  }

  async getProfile(userId: string) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        email: true,
        name: true,
        surname: true,
        age: true,
        gender: true,
        avatarUrl: true,
        completedTests: true,
      },
    });
  }
}
