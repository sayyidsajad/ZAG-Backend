import { SetMetadata } from '@nestjs/common';
import { Role } from './enums/role.enum';

// Making Roles Decorator
export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
