import { Body, Controller, Param, Post } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { FundWalletDto } from './dto/fund-wallet.dto';

@Controller('wallets')
export class WalletsController {
  constructor(private service: WalletsService) {}

  @Post()
  create(@Body() dto: CreateWalletDto) {
    return this.service.createWallet(dto.currency);
  }

  @Post(':id/fund')
  fund(
    @Param('id') id: string,
    @Body() dto: FundWalletDto,
  ) {
    return this.service.fundWallet(id, dto.amount);
  }
}