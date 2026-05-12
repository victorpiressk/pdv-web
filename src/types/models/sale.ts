import { PaymentMethod, SaleStatus } from '../../utils/enums';
import type { SaleItem } from './saleItem';

export interface Sale {
  id: string;
  companyId: string;
  sellerId: string;
  customerId: string | null;
  paymentMethod: PaymentMethod;
  status: SaleStatus;
  totalAmount: number;
  items: SaleItem[];
  createdAt: string;
  cancelledAt: string | null;
  cancelledBy: string | null;
}
