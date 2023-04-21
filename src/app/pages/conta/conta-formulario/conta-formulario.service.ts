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

  public criarConta (conta: Conta): Observable<string> {
    return this.contaService.create(conta);
  }

  public pegarTodosClientes(): Observable<Cliente[]> {
    return this.clientService.getAll(); 
  }

  public pegarContaPorId(id: number): Observable<Conta> {
    return this.contaService.getById(id);
  }

}
 