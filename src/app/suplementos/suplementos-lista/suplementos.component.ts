import { Component, OnInit } from '@angular/core';
import { SuplementosService } from '../services/suplementos.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Suplementos } from '../classes/suplementos';
import { SuplementosFormComponent } from '../suplementos-form/suplementos-form.component';

@Component({
  selector: 'app-suplementos',
  templateUrl: './suplementos.component.html',
  styleUrls: ['./suplementos.component.css']
})
export class SuplementosComponent implements OnInit {
  faCoffee = faCoffee;
  suplementos: Suplementos[] = [];

  constructor(private service: SuplementosService) {}

  ngOnInit() {
    this.carregarLista();
    SuplementosFormComponent.criouAlterouNovoSuplemento.subscribe(supla => {
      console.log('id recuperado: ' + supla.id);
      if (supla.novo) {
        this.suplementos.push(supla);
      } else {
        this.suplementos.map((s, i) => {
          if (s.id === supla.id) {
            this.suplementos[i] = supla;
          }
        });
      }
    });
  }

  carregarLista() {
    this.service
      .listarSuplementos()
      .subscribe(
        response => (this.suplementos = response.code),
        error => console.log(error)
      );
  }
}
