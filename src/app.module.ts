import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { Movie } from './movies/entities/movie.entity';
import { MoviesModule } from './movies/movies.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [User, Movie],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT),
      username: process.env.REDIS_USERNAME,
      password: process.env.REDIS_PASSWORD,
      no_ready_check: true,
    }),
    ConfigModule.forRoot(),
    UsersModule,
    MoviesModule,
    AuthModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
