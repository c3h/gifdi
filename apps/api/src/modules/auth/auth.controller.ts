import { IAuth } from '@gifdi/domain';
import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/shared/filters/http-exception.filter';
import { LoginDTO } from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('api/auth')
@UseFilters(HttpExceptionFilter)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiCreatedResponse()
  async login(@Body() loginDto: LoginDTO): Promise<IAuth.LoginResponse> {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    return this.authService.login(user);
  }
}
