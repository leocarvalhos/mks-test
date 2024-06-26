import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Criação do filme' })
  @ApiResponse({
    status: 201,
    description: 'Filme criado com sucesso',
  })
  @ApiResponse({ status: 500, description: 'Error do servidor' })
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(15)
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Obter lista de todos os filmes ou um filme.' })
  @ApiResponse({
    status: 200,
    description:
      'Listagem completa de filmes com a possibilidade de filtrar um filme pelo título. Key=Title  Value=Nome do filme. Ex: /movies?title=entrando%20numa%20fria',
  })
  @ApiResponse({ status: 500, description: 'Error do servidor' })
  findAll(@Query('title') title?: string) {
    return this.moviesService.findAll(title);
  }

  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(30)
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Obter um filme por ID' })
  @ApiResponse({
    status: 200,
    description: 'Filme encontrado por ID',
  })
  @ApiResponse({ status: 404, description: 'Filme não encontrado' })
  findOne(@Param('id') id: string) {
    return this.moviesService.findOneByID(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Atualizar um filme por ID' })
  @ApiResponse({
    status: 200,
    description: 'Atualização de um filme',
  })
  @ApiResponse({ status: 404, description: 'Filme não encontrado' })
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Excluir um filme por ID' })
  @ApiResponse({
    status: 200,
    description: 'Exclusão de um filme',
  })
  @ApiResponse({ status: 500, description: 'Error do servidor' })
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
