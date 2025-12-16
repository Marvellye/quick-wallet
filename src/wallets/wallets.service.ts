import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { WalletStore } from './wallets.store';
import { Wallet } from './entities/wallet.entity';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class WalletsService {
  constructor(private store: WalletStore) {}

  createWallet(currency: 'USD'): Wallet {
    const wallet: Wallet = {
      id: randomUUID(),
      currency,
      balance: 0,
      transactions: [],
    };
    this.store.save(wallet);
    return wallet;
  }

  fundWallet(walletId: string, amount: number): Wallet {
    const wallet = this.store.get(walletId);

    if (!wallet) {
      throw new NotFoundException('Wallet not found');
    }

    if (amount <= 0) {
      throw new BadRequestException('Amount must be positive');
    }

    wallet.balance += amount;

    const tx: Transaction = {
      id: randomUUID(),
      type: 'FUND',
      amount,
      toWalletId: walletId,
      createdAt: new Date(),
    };

    wallet.transactions.push(tx);
    return wallet;
  }
}
