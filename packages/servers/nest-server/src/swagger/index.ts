import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  SWAGGER_API_ROOT,
  SWAGGER_API_NAME,
  SWAGGER_API_DESCRIPTION,
  SWAGGER_API_CURRENT_VERSION,
  SWAGGER_API_AUTH_NAME,
  SWAGGER_API_AUTH_LOCATION,
} from './constants';
import { existsSync } from 'fs';
import { resolve } from 'path';

export const setupSwagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle(SWAGGER_API_NAME)
    .setDescription(SWAGGER_API_DESCRIPTION)
    .setBasePath('api')
    .setVersion(SWAGGER_API_CURRENT_VERSION)
    .addBearerAuth(SWAGGER_API_AUTH_NAME, SWAGGER_API_AUTH_LOCATION)
    .setSchemes('http')
    .build();
  // const document = SwaggerModule.createDocument(app, options);
  const swaggerFile = './swagger.json';

  const filePath = resolve(__dirname, swaggerFile);
  if (existsSync(filePath)) {
    const document = require(swaggerFile);
    SwaggerModule.setup(SWAGGER_API_ROOT, app, document);
  }
};

export const createDocument = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle(SWAGGER_API_NAME)
    .setDescription(SWAGGER_API_DESCRIPTION)
    .setBasePath('api')
    .setVersion(SWAGGER_API_CURRENT_VERSION)
    .addBearerAuth(SWAGGER_API_AUTH_NAME, SWAGGER_API_AUTH_LOCATION)
    .setSchemes('https')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  return document;
};
