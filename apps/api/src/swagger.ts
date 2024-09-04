import { DocumentBuilder } from '@nestjs/swagger';

export const swagger = new DocumentBuilder()
  .setTitle('VeloTrab')
  .setDescription('Loren Ipsum Dolor')
  .setVersion('0.1')
  .addBearerAuth()
  .build();
