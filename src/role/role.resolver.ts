import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { ReadRolesOutput } from './dto/read-roles.output';

@Resolver((of) => ReadRolesOutput)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query((returns) => ReadRolesOutput, { name: 'role' })
  findOne(@Args({ name: 'roleId', type: () => Int }) id: number) {
    return this.roleService.findOne(id);
  }

  @Query((returns) => [ReadRolesOutput], { name: 'roles' })
  findAll() {
    return this.roleService.findAll();
  }

  @Mutation((returns) => String, { name: 'createRole' })
  create(@Args('createRoleInput') createRoleInput: CreateRoleInput) {
    return this.roleService.create(createRoleInput);
  }

  @Mutation((returns) => String, { name: 'updateRole' })
  update(@Args('updateRoleInput') updateRoleInput: UpdateRoleInput) {
    return this.roleService.update(updateRoleInput.id, updateRoleInput);
  }

  @Mutation((returns) => String, { name: 'removeRole' })
  remove(@Args('id') id: number) {
    return this.roleService.remove(id);
  }
}
