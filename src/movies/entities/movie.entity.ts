import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 150 })
  title: string;

  @Column('text')
  description: string;
}
