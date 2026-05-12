import { PaymentMethod } from '../../utils/enums';

// Frontend (camelCase) — montado pelos formulários da aplicação
export interface CreateSaleItemInput {
  productId: string;
  quantity: number;
}

export interface CreateSaleInput {
  customerId?: string;
  paymentMethod: PaymentMethod;
  items: CreateSaleItemInput[];
}

export interface CancelSaleInput {
  cancelledBy: string;
}

// Backend (snake_case) — enviado para a API
export interface CreateSaleItemRequest {
  product_id: string;
  quantity: number;
}

export interface CreateSaleRequest {
  customer_id?: string;
  payment_method: PaymentMethod;
  items: CreateSaleItemRequest[];
}

export interface CancelSaleRequest {
  cancelled_by: string;
}
