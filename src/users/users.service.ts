import { Inject, Injectable } from '@nestjs/common';
import { Role } from 'src/roles/enums/role.enum';
import { User } from './dto/user.dto';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_MODEL')
    private _usersModel: Model<any>,
  ) {}
  // Find - Whether that particular user is there or not in the above Array.
  async findOne(username: string): Promise<User | undefined> {
    return this._usersModel.findOne({ username });
  }
}
