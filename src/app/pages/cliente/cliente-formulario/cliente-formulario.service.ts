import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '@entities';
import { ClienteService, ContaService } from '@services';

@Injectable({
  providedIn: 'root'
})
export class ClienteFormularioService {

  constructor(
    private clienteService: ClienteService
  ) { }

  public salvarCliente(cliente: Cliente): Observable<string> {
    console.log(cliente.id, {cliente});
    if (!!cliente.id) {
      return this.clienteService.update(cliente);
    } else {
      return this.clienteService.create(cliente);
    }
  }

  public pegarClientePorId(id: number): Observable<Cliente> {
    return this.clienteService.getById(id);
  }
}
