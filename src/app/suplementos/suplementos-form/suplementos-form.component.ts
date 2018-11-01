import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Suplementos } from '../classes/suplementos';
import { SuplementosService } from '../services/suplementos.service';

@Component({
  selector: 'app-suplementos-form',
  templateUrl: './suplementos-form.component.html',
  styleUrls: ['./suplementos-form.component.css']
})
  export class SuplementosFormComponent implements OnInit, OnDestroy {

  static criouAlterouNovoSuplemento = new EventEmitter<Suplementos>();

  supla: Suplementos;
  inscricao: Subscription;
  suplementosForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private service: SuplementosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.carregarCampos();
    this.inscricao = this.route.params.subscribe((params: any) => {
      const id = params['id'];
      if (id != null) {
        this.service.findById(id).subscribe(supla => {
          this.supla = supla.code;
          this.valorizarCampos(this.supla);
        });
      }
      if (this.supla === null) {
        this.supla = null;
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  onSubmit() {
    this.supla = new Suplementos();
    this.supla.id = this.suplementosForm.get('idSuplemento').value as number;
    this.supla.descricao = this.suplementosForm.get('descricao').value;
    this.supla.obs = this.suplementosForm.get('obs').value;
    if (this.supla.id > 0) {
      this.service.updateSuplementos(this.supla.id, this.supla).subscribe(
        supla => {
          SuplementosFormComponent.criouAlterouNovoSuplemento.emit(supla.code);
          this.router.navigate(['/suplementos']);
        },
        error => {
          alert(error);
          console.log(error);
        }
      );
    } else {
      this.service.addSuplementos(this.supla).subscribe(
        supla => {
          supla.code.novo = true;
          SuplementosFormComponent.criouAlterouNovoSuplemento.emit(supla.code);
          this.router.navigate(['/suplementos']);
        },
        error => {
          alert(error);
          console.log(error);
        }
      );
    }
  }

  carregarCampos() {
    this.suplementosForm = this.formBuilder.group({
      idSuplemento: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      obs: ['', Validators.required]
    });
    this.suplementosForm.get('idSuplemento').disable({ onlySelf: true });
  }

  get f() {
    return this.suplementosForm.controls;
  }

  valorizarCampos(sup: Suplementos) {
    this.suplementosForm.patchValue({
      idSuplemento: sup.id,
      descricao: sup.descricao,
      obs: sup.obs
    });
  }
}
