import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ClienteService } from './cliente.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ClienteComponent, ClienteFormComponent],
  providers: [ClienteService]
})
export class ClienteModule {}
