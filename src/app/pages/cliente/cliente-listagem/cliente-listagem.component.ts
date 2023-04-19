import { Component, OnInit } from '@angular/core';
import { ClienteListagemService } from './cliente-listagem.service';
import { Cliente } from '@entities';

@Component({
  selector: 'app-cliente-listagem',
  templateUrl: './cliente-listagem.component.html',
  styleUrls: ['./cliente-listagem.component.scss']
})
export class ClienteListagemComponent implements OnInit {

  clientes!: Cliente[];

  constructor(private service: ClienteListagemService) { }

  ngOnInit() {
    this.pesquisaClientes();
  }

  private pesquisaClientes(): void {
    this.service.getAllClientes().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
    });
  }

  public confirmarDelecao(cliente: Cliente): void {
    if (confirm("Deseja mesmo deletar o cliente?")){
      this.service.deleteCliente(cliente).subscribe((response) => { 
        alert('Cliente deletado com sucesso!!');
        this.pesquisaClientes();
      });
    }
  }
}
