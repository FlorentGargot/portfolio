import { Injectable } from "@angular/core";
import { Project } from "../model/project.model";
import { TechnologyService } from "./technology.service";

@Injectable({
    providedIn: 'root'
})
export class ProjectService{
    projects: Project[] = [{
        id: 1,
        name: 'Mon premier projet',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, hic? Blanditiis eos dignissimos veniam, dolore sint esse consequuntur harum perferendis eum quos. Est sequi cupiditate vitae soluta pariatur quod magnam iure sint hic laboriosam. Perferendis quae atque vitae eum voluptatibus.',
        dateAdded: new Date(),
        technologies: [1,2,3],
        anchorText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem accusantium magnam amet beatae fuga animi vel ipsam hic facere doloremque!',
        imageUrl: './assets/images/code-informatique.jpg'
    },
    {
        id: 2,
        name: 'Mon projet Angular',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, hic? Blanditiis eos dignissimos veniam, dolore sint esse consequuntur harum perferendis eum quos. Est sequi cupiditate vitae soluta pariatur quod magnam iure sint hic laboriosam. Perferendis quae atque vitae eum voluptatibus.',
        dateAdded: new Date(),
        technologies: [4,5,6],
        anchorText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem accusantium magnam amet beatae fuga animi vel ipsam hic facere doloremque!',
        imageUrl: './assets/images/source-code_featured-image.png'
    },    
    {
        id: 3,
        name: 'Mon projet React',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, hic? Blanditiis eos dignissimos veniam, dolore sint esse consequuntur harum perferendis eum quos. Est sequi cupiditate vitae soluta pariatur quod magnam iure sint hic laboriosam. Perferendis quae atque vitae eum voluptatibus.',
        dateAdded: new Date(),
        technologies: [3,6,7,8],
        anchorText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem accusantium magnam amet beatae fuga animi vel ipsam hic facere doloremque!',
        imageUrl: './assets/images/Best-Code-and-Text-Editors.png'
    }];

    constructor(private technologyService: TechnologyService){
        this.projects.forEach(element => {
            element.technologyObject = element.technologies.map(a=>technologyService.getTechnologyById(a));
        });
    }


    getProjectById(id: number) : Project | undefined{
        return this.projects.find(i => i.id === id);
    }
}