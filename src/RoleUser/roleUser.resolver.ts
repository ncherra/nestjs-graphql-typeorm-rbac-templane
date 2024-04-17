import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoleUserService } from './roleUser.service';
import { CreateRoleUserInput } from './dto/create-roleUser.input';
import { UpdateRolesUsersInput } from './dto/update-roleUser.input';
import { ReadRolesOutput } from 'src/role/dto/read-roles.output';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';

@Resolver((of) => ReadRolesOutput)
export class RoleUserResolver {
  constructor(private readonly roleUserService: RoleUserService) {}

  @Query((returns) => [ReadRolesOutput], { name: 'roleUsers' })
  findAll() {
    return this.roleUserService.findAll();
  }

  @Query((returns) => ReadRolesOutput, { name: 'roleUser' })
  findOne(@Args('id') id: number) {
    return this.roleUserService.findOne(id);
  }

  @Roles(Role.ADMIN)
  @Mutation((returns) => String, { name: 'createRoleUser' })
  create(
    @Args('createRoleUserInput') createRolesUsersInput: CreateRoleUserInput,
  ) {
    return this.roleUserService.create(createRolesUsersInput);
  }

  /*
  @Mutation('updateRoleUser')
  update(
    @Args('updateRoleUserInput') updateRolesUsersInput: UpdateRolesUsersInput,
  ) {
    return this.roleUserService.update(
      updateRolesUsersInput.id,
      updateRolesUsersInput,
    );
  }
  @Mutation('removeRoleUser')
  remove(@Args('id') id: number) {
    return this.roleUserService.remove(id);
  }
  */
}
