import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteListaComponent } from '../cliente-lista/cliente.lista.component';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteListaComponent,
    children: [
      { path: ':id/editar', component: ClienteFormComponent },
      { path: 'novo', component: ClienteFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {}
