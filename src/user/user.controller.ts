import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UserUpdateDiconnect } from './dto/update-user.dto';
import { User } from './user.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Public } from 'src/auth/decorators/public.decorator';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Public()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('/umaConfig')
  updateUMAConfig(@Req() req, @Body() umaConfig: string) {
    console.log(umaConfig);
    console.log(req.user);
    console.log(req.headers);
    this.userService.updateUMAConfig(req.user.id, umaConfig);
  }

  @Post('/disconnect_save')
  updateUserDiconenctSave(@Req() req, @Body() userUpdate: UserUpdateDiconnect) {
    console.log(req.user);
    this.userService.updateDisconnect(req.user.id, userUpdate);
  }

  @Get()
  @Public()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
