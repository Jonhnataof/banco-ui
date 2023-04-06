import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListagemComponent } from './cliente-listagem.component';

const routes: Routes = [
  {
    path: "", 
    component: ClienteListagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteListagemRoutingModule { }
