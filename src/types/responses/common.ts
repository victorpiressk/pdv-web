// Backend (snake_case) — retornado pela API
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Frontend (camelCase) — consumido pela aplicação após transformação
export interface PaginatedData<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
