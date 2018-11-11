import { MedidaCorporal } from './medidaCorporal';
import { Endereco } from './endereco';
import { Fone } from './fone';
export class Cliente {
  id: number;
  atividadeEsportiva: boolean;
  dtNascimento: string;
  email: string;
  nome: string;
  obs: string;
  usaSuplementos: boolean;
  enderecos: Endereco[];
  medidas: MedidaCorporal[];
  fones: Fone[];
  // teste
}
