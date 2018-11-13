import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteListaComponent } from '../cliente-lista/cliente.lista.component';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteListaComponent
  },
  {
    path: 'novo',
    component: ClienteFormComponent

  },
  {
    path: ':id/editar',
    component: ClienteFormComponent

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {}
