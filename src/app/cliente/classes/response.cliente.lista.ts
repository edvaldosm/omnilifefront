import { Cliente } from './cliente';

export interface ResponseClienteLista {
  mensagem: string;
  data: string;
  code: Cliente[];
}
