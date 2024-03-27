import { Role } from 'src/roles/enums/role.enum';

export interface User {
  _id: any;
  userId: number;
  username: string;
  password: string;
  role: Role;
}
