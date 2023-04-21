import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContaFormularioService } from './conta-formulario.service';
import { Cliente, Conta } from '@entities';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';


@Component({
  selector: 'app-conta-formulario',
  templateUrl: './conta-formulario.component.html',
  styleUrls: ['./conta-formulario.component.scss']
})
export class ContaFormularioComponent implements OnInit {

  public formulario!: FormGroup;
  public clientesDropdown!: Cliente[];
  public contaDetalhe!: Conta;

  constructor(
    private formBuilder: FormBuilder,
    private service: ContaFormularioService,
    private route: ActivatedRoute,
    private router: Router
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

    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.pegarConta(Number(id));
    }
  }

  private pegarConta(id: number): void {
    this.service.pegarContaPorId(id).subscribe((conta: Conta) => {
      this.contaDetalhe = conta;
      this.formulario.patchValue(this.contaDetalhe)
    });
  }

  public limpar(): void {
    this.formulario.reset();
  }

  public salvar(): void {
    let conta = new Conta(this.formulario.value);

    this.service.criarConta(conta).subscribe(() => { alert('Conta salva com sucesso!') });
  }

  public cancelar(): void {
    this.router.navigate(['/conta'])
  }
}
