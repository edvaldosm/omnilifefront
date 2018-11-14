import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteUtilService {
  ufs: string[] = ['AC', 'SP', 'MG', 'RJ', 'PR', 'ES', 'RS'];
  constructor() {}
}
