import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContaFormularioService } from './conta-formulario.service';
import { Cliente, Conta } from '@entities';


@Component({
  selector: 'app-conta-formulario',
  templateUrl: './conta-formulario.component.html',
  styleUrls: ['./conta-formulario.component.scss']
})
export class ContaFormularioComponent implements OnInit {

  public formulario!: FormGroup;
  public clientesDropdown!: Cliente[];


  constructor(
    private formBuilder: FormBuilder,
    private service: ContaFormularioService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      numeroConta: [''],
      saldo: [''],
      cliente: ['']
    });

    this.service.pegarTodosClientes().subscribe((clientes: Cliente[]) => {
      this.clientesDropdown = clientes;
    });

  }

  public limpar(): void {
    this.formulario.reset();
  }

  public salvar(): void {
    let conta = new Conta(this.formulario.value);

    debugger;
    this.service.criarConta(conta).subscribe(() => { alert('Conta salva com sucesso!') });
  }

}
