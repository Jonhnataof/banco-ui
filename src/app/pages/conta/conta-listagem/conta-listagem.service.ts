import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from '@entities';
import { ContaService } from '@services';

@Injectable({
  providedIn: 'root'
})
export class ContaListagemService {

  constructor(private contaService: ContaService) { }

  getAllContas(): Observable<Conta[]> {
    return this.contaService.getAll();
  }

  deleteConta(conta: Conta): Observable<string> {
    return this.contaService.delete(conta.id);
  }
}
