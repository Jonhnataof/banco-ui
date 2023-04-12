import { environment } from "src/environments/environment";
import { Cliente } from "../entities/cliente";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable ({
    providedIn: 'root'
})

export class ClienteService {
    url = environment.apiUrl + 'cliente';

    constructor (private http:HttpClient) {}

    getAll():Observable<Cliente[]>{
        return this.http.get<Cliente[]>(this.url);
    }


}