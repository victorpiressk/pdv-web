// Frontend (camelCase) — montado pelos formulários da aplicação
export interface CreateCompanyInput {
  name: string;
  document: string;
  adminName: string;
  adminEmail: string;
  adminPassword: string;
}

// Backend (snake_case) — enviado para a API
export interface CreateCompanyRequest {
  name: string;
  document: string;
  admin_name: string;
  admin_email: string;
  admin_password: string;
}
