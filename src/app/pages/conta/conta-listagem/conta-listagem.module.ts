import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaListagemRoutingModule } from './conta-listagem-routing.module';
import { ContaListagemComponent } from './conta-listagem.component';


@NgModule({
  declarations: [
    ContaListagemComponent
  ],
  imports: [
    CommonModule,
    ContaListagemRoutingModule
  ]
})
export class ContaListagemModule { }
