import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClienteService } from '../services/cliente.service';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';
import { ClienteListaComponent } from '../cliente-lista/cliente.lista.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    ClienteRoutingModule
  ],
  declarations: [ClienteListaComponent, ClienteFormComponent],
  providers: [ClienteService]
})
export class ClienteModule {}
