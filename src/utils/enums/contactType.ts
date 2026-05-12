export const ContactType = {
  Phone: 'phone',
  Email: 'email',
  CPF: 'cpf',
  CNPJ: 'cnpj',
} as const;

export type ContactType = typeof ContactType[keyof typeof ContactType];
