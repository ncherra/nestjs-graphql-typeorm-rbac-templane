import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PayloadToken } from './models/token.model';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginUserInput } from './dto/login-user.input';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

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
    const payload: PayloadToken = {
      id: user.id,
      username: user.username,
      role: ['ADMIN'],
    };
    return this.jwtService.sign(payload);
  }
  /*
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    const valid = user && (await bcrypt.compare(password, user?.password));

    if (user && valid) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
  */
}
