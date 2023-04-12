import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaListagemComponent } from './conta-listagem.component';

const routes: Routes = [{
  path:"",
  component: ContaListagemComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaListagemRoutingModule { }
