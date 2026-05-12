import type { Customer } from '../../types/models';
import type { CustomerDTO } from '../../types/dtos';
import type { CreateCustomerInput, CreateCustomerRequest, UpdateCustomerInput, UpdateCustomerRequest } from '../../types/requests';

export const toCustomer = (dto: CustomerDTO): Customer => ({
    id: dto.id,
    companyId: dto.company_id,
    name: dto.name,
    contactType: dto.contact_type,
    contactValue: dto.contact_value,
    createdAt: dto.created_at,
  })

export const toCreateCustomerRequest = (input: CreateCustomerInput): CreateCustomerRequest => ({
    name: input.name,
    contact_type: input.contactType,
    contact_value: input.contactValue,
  })

export const toUpdateCustomerRequest = (input: UpdateCustomerInput): UpdateCustomerRequest => ({
    name: input.name,
    contact_type: input.contactType,
    contact_value: input.contactValue,
  })
