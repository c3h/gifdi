import { IAuth } from '@gifdi/domain';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { omit } from 'lodash';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const result = omit(user, 'password');
      return result;
    }
    return null;
  }

  async login(user: any): Promise<IAuth.LoginResponse> {
    const payload = { email: user.email, sub: user.id };
    return {
      accessToken: await this.jwtService.sign(payload),
    };
  }
}
