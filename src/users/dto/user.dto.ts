import { Role } from 'src/roles/enums/role.enum';

export interface User {
  userId: number;
  username: string;
  password: string;
  role: Role;
}
