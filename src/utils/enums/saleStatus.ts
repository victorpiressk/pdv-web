export const SaleStatus = {
  Completed: 'completed',
  Cancelled: 'cancelled',
} as const;

export type SaleStatus = typeof SaleStatus[keyof typeof SaleStatus];
