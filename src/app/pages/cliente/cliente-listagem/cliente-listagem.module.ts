import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteListagemRoutingModule } from './cliente-listagem-routing.module';
import { ClienteListagemComponent } from './cliente-listagem.component';


@NgModule({
  declarations: [
    ClienteListagemComponent
  ],
  imports: [
    CommonModule,
    ClienteListagemRoutingModule
  ]
})
export class ClienteListagemModule { }
