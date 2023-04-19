import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '@entities';
import { ClienteService } from '@services';

@Injectable({
  providedIn: 'root'
})
export class ClienteListagemService {

  constructor(private clienteService: ClienteService) { }

  getAllClientes():Observable<Cliente[]>{
    return this.clienteService.getAll();
  }

  deleteCliente(cliente: Cliente):Observable<string>{
    return this.clienteService.delete(cliente.id);
  }
}
