import type { SaleItem } from '../../types/models';
import type { SaleItemDTO } from '../../types/dtos';
import type { CreateSaleItemInput, CreateSaleItemRequest } from '../../types/requests';

export const toSaleItem = (dto: SaleItemDTO): SaleItem => ({
    id: dto.id,
    saleId: dto.sale_id,
    productId: dto.product_id,
    productName: dto.product_name,
    productPrice: parseFloat(dto.product_price),
    quantity: dto.quantity,
    subtotal: parseFloat(dto.subtotal),
  })

export const toCreateSaleItemRequest = (input: CreateSaleItemInput): CreateSaleItemRequest => ({
    product_id: input.productId,
    quantity: input.quantity,
  })
