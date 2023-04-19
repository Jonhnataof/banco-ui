import { Cliente } from "./cliente";

export class Conta {
    id!: number;
    numeroConta!: string;
    saldo!: number;
    cliente!: Cliente;

    constructor(conta?: Partial<Conta>) {
        Object.assign(this, conta);
    }
}