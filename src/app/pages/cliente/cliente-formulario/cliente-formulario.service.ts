import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/core/entities/cliente';
import { ClienteService } from 'src/app/core/services/cliente.service';

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
