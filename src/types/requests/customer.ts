import { ContactType } from '../../utils/enums';

// Frontend (camelCase) — montado pelos formulários da aplicação
export interface CreateCustomerInput {
  name: string;
  contactType: ContactType;
  contactValue: string;
}

export interface UpdateCustomerInput {
  name?: string;
  contactType?: ContactType;
  contactValue?: string;
}

// Backend (snake_case) — enviado para a API
export interface CreateCustomerRequest {
  name: string;
  contact_type: ContactType;
  contact_value: string;
}

export interface UpdateCustomerRequest {
  name?: string;
  contact_type?: ContactType;
  contact_value?: string;
}
