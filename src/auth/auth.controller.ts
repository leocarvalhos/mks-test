/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  @ApiOperation({ summary: 'Fazer login' })
  @ApiResponse({
    status: 200,
    description: 'Usuário logado com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  @Post('login')
  signIn(@Body() LoginUserDto: LoginUserDto) {
    return this.authService.signIn(
      LoginUserDto.username,
      LoginUserDto.password,
    );
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Obter perfil do usuário' })
  @ApiResponse({
    status: 200,
    description: 'Perfil do usuário',
  })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  getProfile(@Request() req) {
    return req.user;
  }
}
