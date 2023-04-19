import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteFormularioService } from './cliente-formulario.service';
import { Cliente } from '@entities';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss']
})
export class ClienteFormularioComponent implements OnInit {

  public formulario!: FormGroup;

  constructor (
    private formBuilder:FormBuilder,
    private service: ClienteFormularioService
  ) {}

  ngOnInit (){
    this.formulario = this.formBuilder.group({
      nome: [''],
      email:[''],
      telefone:[''],
      endereco:['']
    })
  }

  public limpar():void {
    this.formulario.reset();
  }

  public salvar(): void {
    let cliente = new Cliente(this.formulario.value);

    this.service.criarCliente(cliente).subscribe(() => {alert('Cliente salvo com sucesso')});
  }

}
