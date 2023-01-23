/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_Username,
  password: process.env.DB_Password,
  database: process.env.DB_Database,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
