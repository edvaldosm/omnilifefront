import { Component, OnInit } from '@angular/core';
import { Cliente } from '../classes/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.lista.component.html',
  styleUrls: ['./cliente.lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes: Cliente[];

  constructor(private service: ClienteService) { }

  ngOnInit() {
    this.carregarLista();

  }

  carregarLista() {
    this.service.listClientes()
    .subscribe(
      response => (this.clientes = response.code),
      error => console.log(error)
    );
  }

}
