import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AlertModule } from 'ngx-bootstrap/alert';
import { ReactiveFormsModule } from '@angular/forms';
import { SuplementosFormComponent } from '../suplementos-form/suplementos-form.component';
import { SuplementosRoutingModule } from './suplementos.routing.module';
import { SuplementosComponent } from '../suplementos-lista/suplementos.component';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    AngularFontAwesomeModule,
    SuplementosRoutingModule,
    VMessageModule
  ],
  declarations: [SuplementosComponent, SuplementosFormComponent]
})
export class SuplementosModule { }
