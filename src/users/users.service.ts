import { Injectable } from '@nestjs/common';
// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      role: 'admin',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      role: 'user',
    },
    {
      userId: 3,
      username: 'someone',
      password: 'someone123',
      role: 'businessowner',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
