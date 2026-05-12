import { Role } from '../../utils/enums';

export interface User {
  id: string;
  companyId: string;
  name: string;
  email: string;
  role: Role;
  isActive: boolean;
  createdAt: string;
}
