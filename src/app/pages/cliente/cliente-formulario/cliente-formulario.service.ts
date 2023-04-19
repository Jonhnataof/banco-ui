import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '@entities';
import { ClienteService } from '@services';

@Injectable({
  providedIn: 'root'
})
export class ClienteFormularioService {

  constructor(private clienteService: ClienteService) {

  }

  criarCliente(cliente: Cliente): Observable<string> {
    return this.clienteService.create(cliente);
  }
}
