import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '@entities';
import { ClienteService, ContaService } from '@services';

@Injectable({
  providedIn: 'root'
})
export class ClienteFormularioService {

  constructor(
    private clienteService: ClienteService,
    private contaService: ContaService
    ) { }

  public criarCliente(cliente: Cliente): Observable<string> {
    return this.clienteService.create(cliente);
  } 

  public pegarClientePorId(id: number): Observable<Cliente> {
    return this.clienteService.getById(id); 
  }
}
