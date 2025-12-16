import { Transaction } from './transaction.entity';

export class Wallet {
  id: string;
  currency: 'USD';
  balance: number;
  transactions: Transaction[] = [];
}