import { environment } from "src/environments/environment";
import { Cliente } from "../entities/cliente";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ClienteService {
    url = environment.apiUrl + 'cliente';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.url);
    }

    create(cliente: Cliente): Observable<string> {
        return this.http.post(this.url, cliente, { responseType: 'text' });
    }

    delete(id: number): Observable<string> {
        return this.http.delete(this.url + "/" + id, { responseType: 'text' });
    }
}