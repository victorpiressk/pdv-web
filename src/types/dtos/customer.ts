import { ContactType } from '../../utils/enums';

export interface CustomerDTO {
  id: string;
  company_id: string;
  name: string;
  contact_type: ContactType;
  contact_value: string;
  created_at: string;
}
