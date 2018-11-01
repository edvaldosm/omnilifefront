import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatologiaFormComponent } from './../patologia-form/patologia-form.component';
import { PatologiaListaComponent } from '../patologia-lista/patologia-lista.component';

const routes: Routes = [
  {
    path: '',
    component: PatologiaListaComponent,
    children: [
      { path: ':id/editar', component: PatologiaFormComponent },
      { path: 'novo', component: PatologiaFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatologiaRoutingModule {}
