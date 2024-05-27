import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { MoviesModule } from 'src/movies/movies.module';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    forwardRef(() => UsersModule),
    forwardRef(() => MoviesModule),
    JwtModule.register({
      global: true,
      secret: 'process.env.JWT_PASS',
      signOptions: { expiresIn: '2h' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService, AuthModule],
})
export class AuthModule {}
