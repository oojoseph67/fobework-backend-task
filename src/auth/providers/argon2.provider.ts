import { Injectable } from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import * as argon2 from 'argon2';

@Injectable()
export class Argon2Provider implements HashingProvider {
  /**
   * Hashes a given password using Argon2.
   *
   * @param options - The options for hashing the password.
   * @param options.password - The password to be hashed. Can be a string or a Buffer.
   *
   * @returns A Promise that resolves to the hashed password as a string.
   */
  public async hashPassword({
    password,
  }: {
    password: string | Buffer;
  }): Promise<string> {
    return argon2.hash(password, {
      type: argon2.argon2id,
      memoryCost: 65536, // 64 MiB
      timeCost: 3, // 3 iterations
      parallelism: 4, // 4 threads
    });
  }

  /**
   * Compares a given password with its hashed version.
   *
   * @param password - The password to compare. It can be a string or a Buffer.
   * @param hashedPassword - The hashed version of the password to compare against.
   *
   * @returns A Promise that resolves to a boolean indicating whether the password matches the hashed password.
   */
  async comparePasswords({
    password,
    hashedPassword,
  }: {
    password: string | Buffer;
    hashedPassword: string;
  }): Promise<boolean> {
    return argon2.verify(hashedPassword, password);
  }
} 