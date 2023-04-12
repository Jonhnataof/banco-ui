import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/core/entities/cliente';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteListagemService {

  constructor(private clienteService: ClienteService) { }

  getAllClientes():Observable<Cliente[]>{
    return this.clienteService.getAll();
  }
}
