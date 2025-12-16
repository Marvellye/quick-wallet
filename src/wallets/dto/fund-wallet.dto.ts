import { IsPositive } from 'class-validator';

export class FundWalletDto {
  @IsPositive()
  amount: number;
}