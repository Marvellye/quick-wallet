import { Module } from '@nestjs/common';
import { WalletsController } from './wallets.controller';
import { WalletsService } from './wallets.service';
import { WalletStore } from './wallets.store'; 

@Module({
  controllers: [WalletsController],
  providers: [WalletsService, WalletStore]
})
export class WalletsModule {}
