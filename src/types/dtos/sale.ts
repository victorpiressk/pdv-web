import { PaymentMethod, SaleStatus } from '../../utils/enums';
import type { SaleItemDTO } from './saleItem';

export interface SaleDTO {
  id: string;
  company_id: string;
  seller_id: string;
  customer_id: string | null;
  payment_method: PaymentMethod;
  status: SaleStatus;
  total_amount: string;
  items: SaleItemDTO[];
  created_at: string;
  cancelled_at: string | null;
  cancelled_by: string | null;
}
