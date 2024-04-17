import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateRoleUserInput {
  @Field((type) => Int)
  id: number;
}
