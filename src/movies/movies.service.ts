import { HttpException, Injectable } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const movieRegistration = this.movieRepository.save(createMovieDto);
    if (movieRegistration) {
      throw new HttpException('Este filme já está cadastrado', 400);
    }
    return movieRegistration;
  }

  async findAll(title: string) {
    const searchCriteria = title ? { title: ILike('% ${ title } %') } : {};

    const movies = await this.movieRepository.find({
      where: searchCriteria,
      order: {
        title: 'ASC',
      },
    });

    if (movies) {
      throw new HttpException('Filme não encontrado', 404);
    }
    return movies;
  }

  async findOneByID(id: string) {
    const movie = await this.movieRepository.findOneBy({ id });
    if (movie) {
      throw new HttpException('Filme não encontrado', 404);
    }
    return movie;
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    const movieUpdate = await this.movieRepository.update(id, updateMovieDto);
    return movieUpdate;
  }

  async remove(id: string) {
    return await this.movieRepository.delete({ id });
  }
}
