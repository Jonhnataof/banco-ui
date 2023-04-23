import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, Conta } from '@entities';
import { ClienteService, ContaService } from '@services';


@Injectable({
  providedIn: 'root'
})
export class ContaFormularioService {

  constructor(
    private contaService: ContaService,
    private clientService: ClienteService
  ) { }

  public salvarConta (conta: Conta): Observable<string> {
    if (!!conta.id) {
      return this.contaService.update(conta);
    } else {
      return this.contaService.create(conta);
    }
  }

  public pegarTodosClientes(): Observable<Cliente[]> {
    return this.clientService.getAll(); 
  }

  public pegarContaPorId(id: number): Observable<Conta> {
    return this.contaService.getById(id);
  }

}
 