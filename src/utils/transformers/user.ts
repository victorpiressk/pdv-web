import type { User } from '../../types/models';
import type { UserDTO } from '../../types/dtos';
import type { CreateUserInput, CreateUserRequest, UpdateUserInput, UpdateUserRequest, UpdatePasswordInput, UpdatePasswordRequest } from '../../types/requests';

export const toUser = (dto: UserDTO): User => ({
    id: dto.id,
    companyId: dto.company_id,
    name: dto.name,
    email: dto.email,
    role: dto.role,
    isActive: dto.is_active,
    createdAt: dto.created_at,
  })

export const toCreateUserRequest = (input: CreateUserInput): CreateUserRequest => ({
    name: input.name,
    email: input.email,
    password: input.password,
    role: input.role,
  })

export const toUpdateUserRequest = (input: UpdateUserInput): UpdateUserRequest => ({
    name: input.name,
    email: input.email,
    is_active: input.isActive,
  })

export const toUpdatePasswordRequest = (input: UpdatePasswordInput): UpdatePasswordRequest => ({
    current_password: input.currentPassword,
    new_password: input.newPassword,
  })
