import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Movie } from './movies/entities/movie.entity';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'kesavan.db.elephantsql.com',
      port: 5432,
      username: 'swzgjfsv',
      password: 'Gc5t70p8BvwaRwrT4waMHr984n2m2M85',
      database: 'swzgjfsv',
      entities: [User, Movie],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([User, Movie]),
    UsersModule,
    MoviesModule,
    AuthModule,
  ],
})
export class AppModule {}
