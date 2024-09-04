import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { hashPassword } from 'src/shared/utils/password.utils';
import { AddUserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: AddUserDTO): Promise<void> {
    const hashedPassword = await hashPassword(data.password);

    await this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
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
