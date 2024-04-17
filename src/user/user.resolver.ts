import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddUserArgs } from './args/addUser.args';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User, { name: 'userById' })
  getUserById(@Args({ name: 'userId', type: () => Int }) id: number) {
    return this.userService.findOne({ where: { id: id } });
  }

  @Query(() => [User], { name: 'users' })
  @Auth(Role.ADMIN)
  getAllUsers() {
    return this.userService.findAll();
  }

  @Mutation((returns) => String, { name: 'deleteUser' })
  deleteUserById(@Args({ name: 'userId', type: () => Int }) id: number) {
    return this.userService.remove(id);
  }

  @Mutation((returns) => String, { name: 'addUserArgs' })
  addUserArgs(@Args('addUserArgs') user: AddUserArgs) {
    return this.userService.create(user);
  }
}
