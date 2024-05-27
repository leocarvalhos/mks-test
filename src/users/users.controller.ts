import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um usuário' })
  @ApiResponse({
    status: 201,
    description: 'O usuário foi criado com sucesso.',
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(30)
  @ApiOperation({ summary: 'Encontrar todos usuários' })
  @ApiResponse({
    status: 200,
    description: 'Os usuários foram criado com sucesso.',
  })
  @ApiResponse({ status: 403, description: 'Proibido.' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(30)
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Encontrar um usuário por ID' })
  @ApiResponse({
    status: 200,
    description: 'O usuário foi criado com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  findOneByUsername(@Param('id') id: string) {
    return this.usersService.findOneByID(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Atualizar um usuário por ID' })
  @ApiResponse({
    status: 204,
    description: 'O usuário foi atualizado com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Deletar um usuário por ID' })
  @ApiResponse({
    status: 204,
    description: 'O usuário foi deletado com sucesso.',
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
