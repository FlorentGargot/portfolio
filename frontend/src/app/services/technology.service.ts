import { Injectable } from "@angular/core";
import { Technology } from "../model/technology.model";

@Injectable({
    providedIn: 'root'
})
export class TechnologyService{
    technologies: Technology[] = [
        {
            id: 1,
            name: 'HTML',
            description: '',
            state: Technology.State.Operationnal,
            color: "#0000c0",
            level: 4
        },        
        {
            id: 2,
            name: 'CSS',
            description: '',
            state: Technology.State.Operationnal,
            color: "#0080c0",
            level: 4
        },        
        {
            id: 3,
            name: 'JavaScript',
            description: '',
            state: Technology.State.Operationnal,
            color: "#008040",
            level: 3
        },        
        {
            id: 4,
            name: 'TypeScript',
            description: '',
            state: Technology.State.Operationnal,
            color: "#200080",
            level: 4
        },        
        {
            id: 5,
            name: 'Angular',
            description: '',
            state: Technology.State.Operationnal,
            color: "#c00040",
            level: 4
        },        
        {
            id: 6,
            name: 'SCSS',
            description: '',
            state: Technology.State.Operationnal,
            color: "#c08040",
            level: 4
        },        
        {
            id: 7,
            name: 'React',
            description: '',
            state: Technology.State.Learning,
            color: "#0000e0",
            level: 4
        },        
        {
            id: 8,
            name: 'JSX',
            description: '',
            state: Technology.State.Learning,
            color: "#40c040",
            level: 4
        }
    ];

    getTechnologyById(id: number) : Technology | undefined{
        return this.technologies.find(i => i.id === id);
    }

}