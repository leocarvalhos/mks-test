import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  @ApiOperation({ summary: 'Login' })
  @ApiResponse({
    status: 200,
    description: 'Usuário logado com sucesso',
  })
  @ApiResponse({ status: 500, description: 'Erro no servidor.' })
  // @UseGuards(LocalAuthGuard)
  validateUser(@Request() req: any) {
    return req.user;
  }

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
  // @UseGuards(LocalAuthGuard)
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
  // @UseGuards(LocalAuthGuard)
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
  // @UseGuards(LocalAuthGuard)
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
  // @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Deletar um usuário por ID' })
  @ApiResponse({
    status: 204,
    description: 'O usuário foi deletado com sucesso.',
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
