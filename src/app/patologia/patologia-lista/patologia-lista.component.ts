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
    PatologiaFormComponent.criouAlterouPatologia.subscribe(patologia => {
      console.log('id recuperado: ' + patologia.id);
      if (patologia.novo) {
        this.patologias.push(patologia);
      } else {
        this.patologias.map((s, i) => {
          if (s.id === patologia.id) {
            this.patologias[i] = patologia;
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
