import { Role } from '../../utils/enums';

// Frontend (camelCase) — montado pelos formulários da aplicação
export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface UpdateUserInput {
  name?: string;
  email?: string;
  isActive?: boolean;
}

export interface UpdatePasswordInput {
  currentPassword: string;
  newPassword: string;
}

// Backend (snake_case) — enviado para a API
export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  is_active?: boolean;
}

export interface UpdatePasswordRequest {
  current_password: string;
  new_password: string;
}
