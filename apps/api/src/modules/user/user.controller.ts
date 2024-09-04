import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/shared/filters/http-exception.filter';
import { AddUserDTO } from './user.dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('api/user')
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  @ApiCreatedResponse()
  async createUser(@Body() userData: AddUserDTO): Promise<void> {
    await this.userService.createUser(userData);
  }
}
