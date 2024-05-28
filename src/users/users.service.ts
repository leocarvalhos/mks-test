import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;
    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.save({
      username,
      password: encryptedPassword,
    });

    return newUser;
  }

  async findAll() {
    const users = await this.userRepository.find();
    return users;
  }

  async findOneByID(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }

  async findOneByUsername(username: string) {
    const user = await this.userRepository.findOneBy({ username });
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    const userUpdate = await this.userRepository.update(id, updateUserDto);

    return userUpdate;
  }

  async remove(id: string) {
    return await this.userRepository.delete(id);
  }
}
