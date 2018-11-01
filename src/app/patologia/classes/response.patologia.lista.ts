import { Patologia } from './patologia';
export interface ResponsePatologiaLista {
  mensagem: string;
  data: string;
  code: Patologia[];
}
