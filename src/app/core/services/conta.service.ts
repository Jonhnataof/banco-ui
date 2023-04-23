import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Conta } from "../entities/conta";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable ({
    providedIn: 'root'
})
export class ContaService {
    url = environment.apiUrl + 'conta';

    constructor (private http:HttpClient) {}

    getAll():Observable<Conta[]>{
        return this.http.get<Conta[]>(this.url);
    }

    update(conta: Conta): Observable<string> {
        return this.http.put(`${this.url}/${conta.id}`, conta, {responseType: 'text'});
    }

    create(conta: Conta): Observable<string> {
        
        return this.http.post(this.url, conta, {responseType:'text'});
    }

    delete(id: number):Observable<string>{
        return this.http.delete(this.url + "/" + id, {responseType: 'text'});
    }

    getById(id: number): Observable<Conta> {
        return this.http.get<Conta>(`${this.url}/${id}`);
    }
  
}