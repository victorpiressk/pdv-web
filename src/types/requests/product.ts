// Frontend (camelCase) — montado pelos formulários da aplicação
export interface CreateProductInput {
  name: string;
  image: string;
  price: string;
  stock: number;
}

export interface UpdateProductInput {
  name?: string;
  image?: string;
  price?: string;
  isActive?: boolean;
}

export interface UpdateProductStockInput {
  stock: number;
}

// Backend (snake_case) — enviado para a API
export interface CreateProductRequest {
  name: string;
  image: string;
  price: string;
  stock: number;
}

export interface UpdateProductRequest {
  name?: string;
  image?: string;
  price?: string;
  is_active?: boolean;
}

export interface UpdateProductStockRequest {
  stock: number;
}
