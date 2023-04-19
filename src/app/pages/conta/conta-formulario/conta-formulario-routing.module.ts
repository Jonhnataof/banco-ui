import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaFormularioComponent } from './conta-formulario.component';

const routes: Routes = [
  {
    path:"",
    component: ContaFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaFormularioRoutingModule { }
