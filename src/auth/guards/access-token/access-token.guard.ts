import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import jwtConfig from 'src/config/jwt.config';

export const REQUEST_USER_KEY = 'user';

export type UserPayload = {
  sub: number;
  email: string;
  iat: number;
  exp: number;
  aud: string;
  iss: string;
};

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(
    // injecting necessary services here

    // injecting jwt service
    private jwtService: JwtService,

    @Inject(jwtConfig.KEY)
    private jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}

  private extractRequestFromHeader({ request }: { request: Request }) {
    const [_, token] = request.headers.authorization?.split(' ') ?? [];
    return token;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // get the request object from the execution context
    const request = context.switchToHttp().getRequest();

    // extract the token from the request (header)
    const token = this.extractRequestFromHeader({ request });
    // console.log('inside canActivate', token);

    // validate the token
    if (!token) {
      throw new HttpException('No token passed', HttpStatus.UNAUTHORIZED);
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.jwtConfiguration.jwtSecret,
        // audience: this.jwtConfiguration.jwtTokenAudience,
        // issuer: this.jwtConfiguration.jwtTokenIssuer,
        // ignoreExpiration: true
      });
      request[REQUEST_USER_KEY] = payload as UserPayload;
    } catch (error: any) {
      throw new HttpException(`${error.message}`, HttpStatus.UNAUTHORIZED, {
        cause: error.message,
        description: error,
      });
    }

    return true;
  }
}
