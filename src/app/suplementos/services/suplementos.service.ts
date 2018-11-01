import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseSuplemento } from '../classes/response.suplemento';
import { ResponseSuplementoLista } from '../classes/response.suplemento.lista';
import { Suplementos } from '../classes/suplementos';


const API = 'http://localhost:8085/clienteomnilife';

@Injectable({
  providedIn: 'root'
})
export class SuplementosService {
  rr: Observable<ResponseSuplemento>;
  constructor(private http: HttpClient) {}

  listarSuplementos() {
    return this.http.get<ResponseSuplementoLista>(API + '/suplementos');
  }

  findById(id: number) {
    return this.http.get<ResponseSuplemento>(API + '/suplementos/' + id);
  }

  updateSuplementos(id: number, suplemento: Suplementos) {
    this.rr = this.http.put<ResponseSuplemento>(
      API + '/suplementos/' + id,
      suplemento
    );
    return this.rr;
  }

  addSuplementos(suplemento: Suplementos) {
    this.rr = this.http.post<ResponseSuplemento>(API + '/suplementos', suplemento);
    return this.rr;
  }
}
