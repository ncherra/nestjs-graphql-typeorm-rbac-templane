import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role]), // Registra la entidad con TypeOrmModule
  ],
  providers: [RoleResolver, RoleService],
})
export class RoleModule {}
