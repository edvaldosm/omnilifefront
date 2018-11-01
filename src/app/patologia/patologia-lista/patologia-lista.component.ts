import { PatologiaFormComponent } from './../patologia-form/patologia-form.component';
import { Component, OnInit } from '@angular/core';

import { Patologia } from '../classes/patologia';
import { PatologiaService } from './../services/patologia.service';

@Component({
  selector: 'app-patologia-lista',
  templateUrl: './patologia-lista.component.html',
  styleUrls: ['./patologia-lista.component.css']
})
export class PatologiaListaComponent implements OnInit {

  patologias: Patologia[];

  constructor(private service: PatologiaService) { }

  ngOnInit() {
    this.carregarLista();
    PatologiaFormComponent.criouAlterouPatologia.subscribe(pato => {
      console.log('id recuperado: ' + pato.id);
      if (pato.novo) {
        this.patologias.push(pato);
      } else {
        this.patologias.map((s, i) => {
          if (s.id === pato.id) {
            this.patologias[i] = pato;
          }
        });
      }
    });
  }

  carregarLista() {
    this.service
    .listarPatologias()
    .subscribe(
      response => (this.patologias = response.code),
      error => console.log(error)
    );
  }
}
