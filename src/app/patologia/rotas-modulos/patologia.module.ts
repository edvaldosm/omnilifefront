import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PatologiaRoutingModule } from './patologia-routing.module';
import { PatologiaFormComponent } from '../patologia-form/patologia-form.component';
import { PatologiaListaComponent } from './../patologia-lista/patologia-lista.component';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,

    PatologiaRoutingModule
  ],
  declarations: [PatologiaListaComponent, PatologiaFormComponent]
})
export class PatologiaModule {}
