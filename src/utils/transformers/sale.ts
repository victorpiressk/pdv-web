import type { Sale } from '../../types/models';
import type { SaleDTO } from '../../types/dtos';
import type { CreateSaleInput, CreateSaleRequest, CancelSaleInput, CancelSaleRequest } from '../../types/requests/sale';
import { toSaleItem, toCreateSaleItemRequest } from './saleItem';

export const toSale = (dto: SaleDTO): Sale => ({
    id: dto.id,
    companyId: dto.company_id,
    sellerId: dto.seller_id,
    customerId: dto.customer_id,
    paymentMethod: dto.payment_method,
    status: dto.status,
    totalAmount: parseFloat(dto.total_amount),
    items: dto.items.map(toSaleItem),
    createdAt: dto.created_at,
    cancelledAt: dto.cancelled_at,
    cancelledBy: dto.cancelled_by,
  })

export const toCreateSaleRequest = (input: CreateSaleInput): CreateSaleRequest => ({
    customer_id: input.customerId,
    payment_method: input.paymentMethod,
    items: input.items.map(toCreateSaleItemRequest),
  })

export const toCancelSaleRequest = (input: CancelSaleInput): CancelSaleRequest => ({
    cancelled_by: input.cancelledBy,
  })
