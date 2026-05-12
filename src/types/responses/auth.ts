import type { User } from '../models';
import type { UserDTO } from '../dtos';

// Frontend (camelCase) — consumido pela aplicação após transformação
export interface LoginData {
  access: string;
  refresh: string;
  user: User;
}

// Backend (snake_case) — retornado pela API
export interface LoginResponse {
  access: string;
  refresh: string;
  user: UserDTO;
}

export interface RefreshTokenResponse {
  access: string;
}
