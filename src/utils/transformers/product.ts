import type { Product } from '../../types/models';
import type { ProductDTO } from '../../types/dtos';
import type { CreateProductInput, CreateProductRequest, UpdateProductInput, UpdateProductRequest, UpdateProductStockInput, UpdateProductStockRequest } from '../../types/requests';

export const toProduct = (dto: ProductDTO): Product => ({
    id: dto.id,
    companyId: dto.company_id,
    name: dto.name,
    image: dto.image,
    price: parseFloat(dto.price),
    stock: dto.stock,
    isActive: dto.is_active,
    createdAt: dto.created_at,
  })

export const toCreateProductRequest = (input: CreateProductInput): CreateProductRequest => ({
    name: input.name,
    image: input.image,
    price: input.price,
    stock: input.stock,
  })

export const toUpdateProductRequest = (input: UpdateProductInput): UpdateProductRequest => ({
    name: input.name,
    image: input.image,
    price: input.price,
    is_active: input.isActive,
  })

export const toUpdateProductStockRequest = (input: UpdateProductStockInput): UpdateProductStockRequest => ({
    stock: input.stock,
  })
