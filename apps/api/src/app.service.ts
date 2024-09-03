import { sum } from '@gifdi/domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! ' + sum(2, 2);
  }
}
