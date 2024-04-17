import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddUserArgs {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;
}
