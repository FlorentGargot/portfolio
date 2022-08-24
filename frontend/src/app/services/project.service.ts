import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../model/project.model";
import { TechnologyService } from "./technology.service";


const headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('Access-Control-Allow-Origin', '*');

@Injectable({
    providedIn: 'root'
})
export class ProjectService{

    getAllProjects() : Observable<Project[]>{
        return this.http.get<Project[]>('http://localhost:3000/api/projects', {'headers': headers});
    }

    getProjectById(id: number) : Observable<Project>{
        return this.http.get<Project>(`http://localhost:3000/api/projects/${id}`, {'headers': headers});
    }
    

    constructor(private http: HttpClient){
    }
}