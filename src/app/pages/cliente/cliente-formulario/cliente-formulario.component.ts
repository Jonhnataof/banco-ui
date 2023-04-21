import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteFormularioService } from './cliente-formulario.service';
import { Cliente } from '@entities';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss']
})
export class ClienteFormularioComponent implements OnInit {

  public formulario!: FormGroup;
  public clienteDetalhe!: Cliente;

  constructor (
    private formBuilder:FormBuilder,
    private service: ClienteFormularioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit (){
    this.formulario = this.formBuilder.group({
      nome: [''],
      email:[''],
      telefone:[''],
      endereco:['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.pegarCliente(Number(id));
    }
  }

  private pegarCliente(id: number):void {
    this.service.pegarClientePorId(id).subscribe((cliente: Cliente ) => {
      this.clienteDetalhe = cliente;
      this.formulario.patchValue(this.clienteDetalhe); 
    })
  }
 

  public limpar():void {
    this.formulario.reset();
  }

  public salvar(): void {
    let cliente = new Cliente(this.formulario.value);

    this.service.criarCliente(cliente).subscribe(() => {alert('Cliente salvo com sucesso')});
  }

  public cancelar(): void {
    this.router.navigate(['/cliente'])
  }

}
