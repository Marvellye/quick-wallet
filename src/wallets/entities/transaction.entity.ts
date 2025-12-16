export type TransactionType = 'FUND' | 'TRANSFER';

export class Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  fromWalletId?: string;
  toWalletId?: string;
  createdAt: Date;
}