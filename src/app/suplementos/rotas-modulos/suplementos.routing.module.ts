import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuplementosComponent } from '../suplementos-lista/suplementos.component';
import { SuplementosFormComponent } from '../suplementos-form/suplementos-form.component';

const suplementosRoutes: Routes = [
  {
    path: '',
    component: SuplementosComponent,
    children: [
      { path: ':id/editar', component: SuplementosFormComponent },
      { path: 'novo', component: SuplementosFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(suplementosRoutes)],
  exports: [RouterModule]
})
export class SuplementosRoutingModule {}
