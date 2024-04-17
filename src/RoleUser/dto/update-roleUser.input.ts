import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleUserInput } from './create-roleUser.input';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateRolesUsersInput extends PartialType(CreateRoleUserInput) {
  @Field((type) => Int)
  id: number;
}
