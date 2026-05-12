export const Role = {
  Admin: 'admin',
  Seller: 'seller',
} as const;

export type Role = typeof Role[keyof typeof Role];
