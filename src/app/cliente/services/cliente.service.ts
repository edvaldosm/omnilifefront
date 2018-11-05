import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseClienteLista } from './../classes/response.cliente.lista';
import { ResponseCliente } from '../classes/response.cliente';
import { Cliente } from '../classes/cliente';

const API = 'http://localhost:8085/clienteomnilife';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  rr: Observable<ResponseCliente>;

  constructor(private http: HttpClient) {}

  listClientes() {
    return this.http.get<ResponseClienteLista>(API + '/cliente');
  }
  findByIdCliente(id: number) {
    return this.http.get<ResponseCliente>(API + '/cliente' + id);
  }
  updateCliente(id: number, cliente: Cliente) {
    this.rr = this.http.put<ResponseCliente>(API + '/cliente', cliente);
    return this.rr;
  }
  addCliente(cliente: Cliente) {
    this.rr = this.http.post<ResponseCliente>(API + '/cliente', cliente);
    return this.rr;
  }
}
