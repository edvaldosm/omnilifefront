import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from '../classes/cliente';
import { ClienteService } from '../services/cliente.service';
import { ClienteUtilService } from '../services/cliente.util.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  cliente: Cliente;
  inscricao: Subscription;
  clienteForm: FormGroup;
  siglas: string[];

  constructor(
    private route: ActivatedRoute,
    private service: ClienteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private serviceUtil: ClienteUtilService
  ) {}

  ngOnInit() {
    this.carregarCampos();
    this.carregarEstados();
  }

  onSubmit() {
    console.log(this.clienteForm.value);
  }
  carregarCampos() {
    this.clienteForm = this.formBuilder.group({
      id: [''],
      atividadeEsportiva: ['', Validators.pattern('true')],
      dtNascimento: [''],
      email: [''],
      nome: [''],
      obs: [''],
      usaSuplementos: ['', Validators.pattern('true')],
      enderecos: this.formBuilder.group({
        nro: [''],
        bairro: [''],
        cep: [''],
        cidade: [''],
        logradouro: [''],
        uf: [''],
        tipoEndereco: ['']
      }),
      fones: this.formBuilder.group({
        ddd: [''],
        nro: [''],
        tpfone: ['']
      })
    });
  }

  carregarEstados() {
    this.siglas = this.serviceUtil.ufs;
  }
}
