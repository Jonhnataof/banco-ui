import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/core/entities/cliente';
import { Conta } from 'src/app/core/entities/conta';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ContaService } from 'src/app/core/services/conta.service';


@Injectable({
  providedIn: 'root'
})
export class ContaFormularioService {

  constructor(
    private contaService: ContaService,
    private clientService: ClienteService
  ) { }

  public criarConta (conta: Conta): Observable<string> {
    return this.contaService.create(conta);
  }

  public pegarTodosClientes(): Observable<Cliente[]> {
    return this.clientService.getAll(); 
  }
}
 