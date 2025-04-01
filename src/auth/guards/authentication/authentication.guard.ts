// import {
//   CanActivate,
//   ExecutionContext,
//   HttpException,
//   HttpStatus,
//   Injectable,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { Observable } from 'rxjs';
// import { AccessTokenGuard } from '../access-token/access-token.guard';
// import { AUTH_TYPE_KEY, AuthType } from 'src/auth/decorators/auth.decorator';

// @Injectable()
// export class AuthenticationGuard implements CanActivate {
//   constructor(
//     // injecting necessary services here

//     // injecting reflector
//     private reflector: Reflector,

//     private accessTokenGuard: AccessTokenGuard,
//   ) {}

//   private static defaultAuthType: AuthType = AuthType.BEARER;

//   private authTypeGuardMap: Record<AuthType, CanActivate | CanActivate[]> = {
//     [AuthType.BEARER]: this.accessTokenGuard,
//     [AuthType.NONE]: {
//       canActivate: () => true,
//     },
//   };

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     // get all auth types from the reflector (metadata)
//     // getting the auth decorator passed
//     const authTypes = this.reflector.getAllAndOverride(
//       AUTH_TYPE_KEY, // decorator that needs checking
//       [context.getHandler(), context.getClass()], // get keys for all type auth
//     ) ?? [AuthenticationGuard.defaultAuthType];

//     // console.log({ authTypes });

//     // getting the right guard for the right auth type decorator
//     const guards = authTypes.map((type) => this.authTypeGuardMap[type]).flat();

//     // console.log('Guards:', JSON.stringify(guards, null, 2));

//     // array of guards
//     // loop guards canActivate
//     // loop through all the guards and fire the canActivate (returns a boolean)
//     for (const instance of guards) {
//       // console.log({ instance });
//       const canActivate = await Promise.resolve(instance.canActivate(context))
//         .then((canActivate) => {
//           // console.log('canActivate', canActivate);
//           return canActivate;
//         })
//         .catch((error: any) => {
//           throw new HttpException(`${error.message}`, HttpStatus.UNAUTHORIZED, {
//             cause: error.message,
//             description: error,
//           });
//         });

//       if (!canActivate) {
//         throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
//       }
//       return true;
//     }

//     // throw exception if no canActivate
//     throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
//   }
// }
