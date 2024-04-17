import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateRoleInput {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
}
