import { Inject, Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @Inject('MOVIE_REPOSITORY')
    private movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const movieRegistration = this.movieRepository.create(createMovieDto);
    return movieRegistration;
  }

  async findAll() {
    const allMovies = await this.movieRepository.find();
    return allMovies;
  }

  async findOneByID(id: string) {
    const movie = await this.movieRepository.findOneBy({ id });
    return movie;
  }

  async findOneByTitle(title: string) {
    const movie = await this.movieRepository.findBy({
      title: ILike(`% ${title} #%`),
    });
    return movie;
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    const movieUpdate = await this.movieRepository.update(id, updateMovieDto);
    return movieUpdate;
  }

  async remove(id: string) {
    return await this.movieRepository.remove(id);
  }
}
