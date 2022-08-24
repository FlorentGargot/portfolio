import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Technology } from "../model/technology.model";

const headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('Access-Control-Allow-Origin', '*');

@Injectable({
    providedIn: 'root'
})
export class TechnologyService{

    constructor(private http: HttpClient){}

    getAllTechnologies() : Observable<Technology[]> {
        return this.http.get<Technology[]>('http://localhost:3000/api/technologies', {'headers': headers});
    }

    getTechnologyById(id: number) : Observable<Technology> {
        return this.http.get<Technology>(`http://localhost:3000/api/technologies/${id}`, {'headers': headers});
    }

}