import { IsEnum } from 'class-validator';

export class CreateWalletDto {
  @IsEnum(['USD'])
  currency: 'USD';
}