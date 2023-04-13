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

    delete(id: number):Observable<string>{
        return this.http.delete(this.url + "/" + id, {responseType: 'text'});
    }
}