import { Injectable } from '@nestjs/common';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletStore {
  private wallets = new Map<string, Wallet>();

  get(id: string): Wallet | undefined {
    return this.wallets.get(id);
  }

  save(wallet: Wallet) {
    this.wallets.set(wallet.id, wallet);
  }

  getAll(): Wallet[] {
    return [...this.wallets.values()];
  }
}