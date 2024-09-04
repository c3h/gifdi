import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { AddUserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: AddUserDTO): Promise<void> {
    await this.prisma.user.create({
      data: {
        email: data.email,
        password: data.password, // TODO - Lembre-se de hash a senha antes de salvar
        profile: {
          create: {
            firstName: data.firstName,
            lastName: data.lastName,
          },
        },
      },
      include: {
        profile: true,
      },
    });
  }
}
