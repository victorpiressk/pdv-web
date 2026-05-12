export const PaymentMethod = {
  Cash: 'cash',
  Card: 'card',
  Pix: 'pix',
} as const;

export type PaymentMethod = typeof PaymentMethod[keyof typeof PaymentMethod];
