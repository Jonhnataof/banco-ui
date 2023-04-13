import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "cliente", 
    loadChildren: () => import("./pages/cliente/cliente-listagem/cliente-listagem.module").then(m => m.ClienteListagemModule),
  },
  {
    path: "cliente/formulario",
    loadChildren: () => import("./pages/cliente/cliente-formulario/cliente-formulario.module").then(m => m.ClienteFormularioModule)
  },
  {
    path: "conta", 
    loadChildren: () => import("./pages/conta/conta-listagem/conta-listagem.module").then(m => m.ContaListagemModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
