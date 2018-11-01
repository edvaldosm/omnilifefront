import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import { AppRoutingModule } from './app.routing.module';
import { VMessageModule } from './shared/components/vmessage/vmessage.module';
import { HttpClientModule } from '@angular/common/http';
// import { PatologiaModule } from './patologia/rotas-modulos/patologia.module';
// import { SuplementosModule } from './suplementos/rotas-modulos/suplementos.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    ClienteModule,
    AppRoutingModule,
    // SuplementosModule,
    VMessageModule,
    // PatologiaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
