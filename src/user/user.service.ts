import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UserUpdateDiconnect } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(where) {
    return this.userRepository.findOne(where);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async updateUMAConfig(id: number, updateUMAConfig: string) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    user.umaConfig = updateUMAConfig;
    return this.userRepository.save(user);
  }
  async updateDisconnect(id: number, userUpdate: UserUpdateDiconnect) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    user.position_x = userUpdate.position_x;
    user.position_y = userUpdate.position_y;
    user.position_z = userUpdate.position_z;
    user.rotation_x = userUpdate.rotation_x;
    user.rotation_y = userUpdate.rotation_y;
    user.rotation_z = userUpdate.rotation_z;
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
