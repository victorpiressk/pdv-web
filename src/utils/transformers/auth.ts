import type { LoginData, LoginResponse } from '../../types/responses';
import { toUser } from './user';

export const toLoginData = (response: LoginResponse): LoginData => ({
    access: response.access,
    refresh: response.refresh,
    user: toUser(response.user),
  })
