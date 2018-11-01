import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component';
// import { SuplementosComponent } from './suplementos/suplementos-lista/suplementos.component';
// import { PatologiaListaComponent } from './patologia/patologia-lista/patologia-lista.component';

const routes: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent
  },
  {
    path: 'suplementos',
    loadChildren:
      './suplementos/rotas-modulos/suplementos.module#SuplementosModule'
    // component: SuplementosComponent
  },
  {
    path: 'patologias',
    loadChildren: './patologia/rotas-modulos/patologia.module#PatologiaModule'
    // component: PatologiaListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
