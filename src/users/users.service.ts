import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;
    const encryptedPassword = await bcrypt.hash(password, 10);

    return this.userRepository.create({
      username,
      password: encryptedPassword,
    });
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
    const userUpdate = await this.update(id, updateUserDto);

    return userUpdate;
  }

  async remove(id: string) {
    return await this.remove(id);
  }
}
