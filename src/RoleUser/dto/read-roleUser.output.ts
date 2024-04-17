import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ReadRoleUserOutput {
  @Field((type) => Int)
  id: number;
}
