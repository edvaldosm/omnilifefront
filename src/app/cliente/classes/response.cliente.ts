import { Cliente } from './cliente';

export interface ResponseCliente {
  mensagem: string;
  data: string;
  code: Cliente;
}
