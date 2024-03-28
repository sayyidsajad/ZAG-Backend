import { Role } from 'src/roles/enums/role.enum';

export interface User {
  // User Type for validating proper data.
  _id: string;
  userId: number;
  username: string;
  password: string;
  role: Role;
}
