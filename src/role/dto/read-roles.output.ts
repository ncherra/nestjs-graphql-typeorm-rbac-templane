import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReadRolesOutput {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;
}
