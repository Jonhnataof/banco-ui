export class Cliente {
    id!: number;
    nome!: string;
    email!: string;
    endereco!: string;
    telefone!: string;

    constructor (cliente?:Partial<Cliente>) {
        Object.assign(this, cliente);
    }
}