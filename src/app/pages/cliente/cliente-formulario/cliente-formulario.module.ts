import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteFormularioRoutingModule } from './cliente-formulario-routing.module';
import { ClienteFormularioComponent } from './cliente-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClienteFormularioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClienteFormularioRoutingModule
  ]
})
export class ClienteFormularioModule { }
