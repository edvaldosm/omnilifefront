import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { Patologia } from '../classes/patologia';
import { PatologiaService } from './../services/patologia.service';

@Component({
  selector: 'app-patologia-form',
  templateUrl: './patologia-form.component.html',
  styleUrls: ['./patologia-form.component.css']
})
export class PatologiaFormComponent implements OnInit, OnDestroy {
  static criouAlterouPatologia = new EventEmitter<Patologia>();

  pato: Patologia;
  inscricao: Subscription;
  patologiaForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private service: PatologiaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.carregarCampos();
    this.inscricao = this.route.params.subscribe((params: any) => {
      const id = params['id'];
      if (id != null) {
        this.service.findById(id).subscribe(pato => {
          this.pato = pato.code;
          this.valorizarCampos(this.pato);
        });
      }
      if (this.pato === null) {
        this.pato = null;
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onSubmit() {
    this.pato = new Patologia();
    this.pato.id = this.patologiaForm.get('idPatologia').value as number;
    this.pato.descricao = this.patologiaForm.get('descricao').value;
    this.pato.nome = this.patologiaForm.get('nome').value;
    if (this.pato.id > 0) {
      this.service.updatePatologia(this.pato.id, this.pato).subscribe(
        patologia => {
          PatologiaFormComponent.criouAlterouPatologia.emit(patologia.code);
          this.router.navigate(['/patologias']);
        },
        error => {
          alert(error);
          console.log(error);
        }
      );
    } else {
      this.service.addPatologia(this.pato).subscribe(
        patologia => {
          patologia.code.novo = true;
          PatologiaFormComponent.criouAlterouPatologia.emit(patologia.code);
          this.router.navigate(['/patologias']);
        },
        error => {
          alert(error);
          console.log(error);
        }
      );
    }
  }

  carregarCampos() {
    this.patologiaForm = this.formBuilder.group({
      idPatologia: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      descricao: ['', Validators.required]
    });
    this.patologiaForm.get('idPatologia').disable({ onlySelf: true });
  }

  get f() {
    return this.patologiaForm.controls;
  }

  valorizarCampos(pato: Patologia) {
    this.patologiaForm.patchValue({
      idPatologia: pato.id,
      descricao: pato.descricao,
      nome: pato.nome
    });
  }
}
