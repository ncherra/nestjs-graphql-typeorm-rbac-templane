import { Module } from '@nestjs/common';
import { RoleUserService } from './roleUser.service';
import { RoleUserResolver } from './roleUser.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleUser } from './roleUser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoleUser])],
  providers: [RoleUserResolver, RoleUserService],
})
export class RoleUserModule {}
