import { ContactType } from '../../utils/enums';

export interface Customer {
  id: string;
  companyId: string;
  name: string;
  contactType: ContactType;
  contactValue: string;
  createdAt: string;
}
