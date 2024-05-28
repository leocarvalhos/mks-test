import { Injectable } from '@nestjs/common';
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
    return movieRegistration;
  }

  async findAll(title: string) {
    if (title) {
      const movie = await this.movieRepository.findBy({
        title: ILike(`%${title}%`),
      });
      return movie;
    }
    const allMovies = await this.movieRepository.find({
      order: {
        title: 'ASC',
      },
    });
    return allMovies;
  }

  async findOneByID(id: string) {
    const movie = await this.movieRepository.findOneBy({ id });
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
