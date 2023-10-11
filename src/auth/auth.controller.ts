import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { UserLogin } from './models/user.model';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post()
  login(@Req() req: Request) {
    const userLogin = req.user as UserLogin;
    console.log('HOLA');
    return this.authService
      .validateUser(userLogin.username, userLogin.password)
      .then((user: User) => {
        const token = this.authService.generateJWT(user);
        return {
          token: token,
          username: user.username,
          umaConfig: user.umaConfig,
          position_x: user.position_x,
          position_y: user.position_y,
          position_z: user.position_z,
          rotation_x: user.rotation_x,
          rotation_y: user.rotation_y,
          rotation_z: user.rotation_z,
        };
      });
  }
}
