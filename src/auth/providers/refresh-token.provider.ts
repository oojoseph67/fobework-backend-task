import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { GenerateTokenProvider } from './generate-token.provider';
import { UserPayload } from '../guards/access-token/access-token.guard';
import { RefreshTokenDto } from '../dto/refresh-token.dto';
import jwtConfig from 'src/config/jwt.config';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class RefreshTokenProvider {
  constructor(
    // injecting jwt service dependency
    private jwtService: JwtService,

    // injecting jwtConfig (environment values)
    @Inject(jwtConfig.KEY)
    private jwtConfiguration: ConfigType<typeof jwtConfig>,

    private generateTokenProvider: GenerateTokenProvider,

    // @Inject(forwardRef(() => UserService))
    private userService: UsersService,
  ) {}

  public async getRefreshToken({ token }: { token: RefreshTokenDto }) {
    try {
      // verify the refresh token sent
      const { sub } = await this.jwtService.verifyAsync<
        Pick<UserPayload, 'sub'>
      >(token.refreshToken, {
        secret: this.jwtConfiguration.jwtSecret,
        audience: this.jwtConfiguration.jwtTokenAudience,
        issuer: this.jwtConfiguration.jwtTokenIssuer,
      });
      // fetch the user
      const checkUser = await this.userService.findById(sub.toString());

      const { user } = checkUser;

      // generate new access and refresh tokens
      const { accessToken, refreshToken } =
        await this.generateTokenProvider.generateTokens({
          user,
        });

      return { accessToken, refreshToken };
    } catch (error: any) {
      throw new HttpException(
        `Invalid refresh token ${error.message}`,
        HttpStatus.UNAUTHORIZED,
        {
          cause: error.message,
          description: error,
        },
      );
    }
  }
}
