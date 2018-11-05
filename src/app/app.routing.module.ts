import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: './cliente/rotas-modulos/cliente.module#ClienteModule'
  },
  {
    path: 'suplementos',
    loadChildren:
      './suplementos/rotas-modulos/suplementos.module#SuplementosModule'
  },
  {
    path: 'patologias',
    loadChildren: './patologia/rotas-modulos/patologia.module#PatologiaModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
