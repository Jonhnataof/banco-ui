import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaFormularioRoutingModule } from './conta-formulario-routing.module';
import { ContaFormularioComponent } from './conta-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContaFormularioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContaFormularioRoutingModule
  ]
})
export class ContaFormularioModule { }
 