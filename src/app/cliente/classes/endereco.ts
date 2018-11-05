import { TipoEnderecoEnum } from './../enuns/endereco.enum';

export class Endereco {
  nro: number;
  bairro: string;
  cep: string;
  cidade: string;
  logradouro: string;
  uf: string;
  tipoEndereco: TipoEnderecoEnum;
}
