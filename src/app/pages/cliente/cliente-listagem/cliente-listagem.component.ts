import { Component, OnInit } from '@angular/core';
import { ClienteListagemService } from './cliente-listagem.service';
import { Cliente } from 'src/app/core/entities/cliente';

@Component({
  selector: 'app-cliente-listagem',
  templateUrl: './cliente-listagem.component.html',
  styleUrls: ['./cliente-listagem.component.scss']
})
export class ClienteListagemComponent implements OnInit {

  clientes!: Cliente[];

  constructor(private service: ClienteListagemService) { }

  ngOnInit() {
    this.service.getAllClientes().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
    });
  }

  public confirmarDelecao(cliente: Cliente): void {
    this.service.deleteCliente(cliente).subscribe(() => { alert('Cliente deletado com sucesso') });
  }
}
