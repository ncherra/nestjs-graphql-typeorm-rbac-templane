import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleUser } from './roleUser.entity';
import { Repository } from 'typeorm';
import { UpdateRolesUsersInput } from './dto/update-roleUser.input';
import { CreateRoleUserInput } from './dto/create-roleUser.input';

@Injectable()
export class RoleUserService {
  constructor(
    @InjectRepository(RoleUser)
    private roleUserRepository: Repository<RoleUser>,
  ) {}
  create(createRoleInput: CreateRoleUserInput) {
    return this.roleUserRepository.create(createRoleInput);
  }

  findAll() {
    return this.roleUserRepository.find();
  }

  findOne(where) {
    return this.roleUserRepository.findOne(where);
  }

  update(id: number, updateRolesInput: UpdateRolesUsersInput) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
