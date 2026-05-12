import { Role } from '../../utils/enums';

export interface UserDTO {
  id: string;
  company_id: string;
  name: string;
  email: string;
  role: Role;
  is_active: boolean;
  created_at: string;
}
