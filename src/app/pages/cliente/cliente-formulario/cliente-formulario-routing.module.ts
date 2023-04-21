import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormularioComponent } from './cliente-formulario.component';

const routes: Routes = [
  {
    path:"",
    component: ClienteFormularioComponent
  },
  {
    path:":id",
    component: ClienteFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteFormularioRoutingModule { }
