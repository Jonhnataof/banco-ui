import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/core/entities/conta';
import { ContaListagemService } from './conta-listagem.service';

@Component({
  selector: 'app-conta-listagem',
  templateUrl: './conta-listagem.component.html',
  styleUrls: ['./conta-listagem.component.scss']
})
export class ContaListagemComponent  implements OnInit {
  contas!: Conta[];

  constructor (private service: ContaListagemService) {}

  ngOnInit(): void {
    this.service.getAllContas().subscribe((contas:Conta[]) => {this.contas = contas; 
    });
  }

}
 