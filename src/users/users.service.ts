import { Injectable } from '@nestjs/common';
import { Role } from 'src/roles/enums/role.enum';
import { User } from './dto/user.dto';
@Injectable()
export class UsersService {
  // Users - Statically showing Users without any database.
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: '123',
      role: Role.Admin,
    },
    {
      userId: 2,
      username: 'maria',
      password: '123',
      role: Role.User,
    },
    {
      userId: 3,
      username: 'someone',
      password: '123',
      role: Role.BusinessOwner,
    },
  ];

  // Find - Whether that particular user is there or not in the above Array.
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
