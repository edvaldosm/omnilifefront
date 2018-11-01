import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ResponsePatologia } from '../classes/response.patologia';
import { ResponsePatologiaLista } from '../classes/response.patologia.lista';
import { Patologia } from '../classes/patologia';

const API = 'http://localhost:8085/clienteomnilife';

@Injectable({
  providedIn: 'root'
})
export class PatologiaService {
  rr: Observable<ResponsePatologia>;
  constructor(private http: HttpClient) {}

  listarPatologias() {
    return this.http.get<ResponsePatologiaLista>(API + '/patologia');
  }

  findById(id: number) {
    return this.http.get<ResponsePatologia>(API + '/patologia/' + id);
  }

  updatePatologia(id: number, patologia: Patologia) {
    this.rr = this.http.put<ResponsePatologia>(
      API + '/patologia/' + id,
      patologia
    );
    return this.rr;
  }

  addPatologia(patologia: Patologia) {
    this.rr = this.http.post<ResponsePatologia>(API + '/patologia', patologia);
    return this.rr;
  }
}
