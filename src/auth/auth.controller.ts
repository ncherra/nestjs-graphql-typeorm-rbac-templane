import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { UserLogin } from './models/user.model';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/user.entity';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //is /auth
  @UseGuards(AuthGuard('local'))
  @Post()
  @Public()
  login(@Req() req: Request) {
    const userLogin = req.user as UserLogin;
    return this.authService
      .validateUser(userLogin.username, userLogin.password)
      .then((user: User) => {
        const token = this.authService.generateJWT(user);
        return {
          token: token,
          username: user.username,
        };
      });
  }
}
