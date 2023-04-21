import { Component, OnInit } from '@angular/core';
import { Conta } from '@entities';
import { ContaListagemService } from './conta-listagem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta-listagem',
  templateUrl: './conta-listagem.component.html',
  styleUrls: ['./conta-listagem.component.scss']
})
export class ContaListagemComponent implements OnInit {
  contas!: Conta[];

  constructor(
    private service: ContaListagemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pesquisaContas();
  }

  private pesquisaContas(): void {
    this.service.getAllContas().subscribe((contas: Conta[]) => {
      this.contas = contas;
    });
  }

  public confirmarDelecao(conta: Conta): void {
    if (confirm("Deseja mesmo deletar a conta?")) {
      this.service.deleteConta(conta).subscribe((resp) => {
        console.log(resp)
        alert('Conta deletado com sucesso');
        this.pesquisaContas();
      });
    }
  }

  public navegarParaFormulario(conta?: Conta) {
    if (conta != null){
      this.router.navigate(['conta/formulario/', conta.id]);
    }else{
      this.router.navigate(['conta/formulario']);
    }
  }
    
}