import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PayloadToken } from './models/token.model';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  validateUser(username: string, password: string): Promise<User | undefined> {
    return this.userService.findOne({ where: { username, password } });
  }

  generateJWT(user: User) {
    const payload: PayloadToken = { id: user.id, username: user.username };
    return this.jwtService.sign(payload);
  }
}
