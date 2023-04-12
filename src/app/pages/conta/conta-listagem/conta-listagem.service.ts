import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from 'src/app/core/entities/conta';
import { ContaService } from 'src/app/core/services/conta.service';

@Injectable({
  providedIn: 'root'
})


export class ContaListagemService {

  constructor(private contaService: ContaService) { }

  getAllContas():Observable<Conta[]>{
    return this.contaService.getAll();
  }
}
