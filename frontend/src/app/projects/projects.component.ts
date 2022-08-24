import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { Technology } from '../model/technology.model';
import { ProjectService } from '../services/project.service';
import { TechnologyService } from '../services/technology.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  technologies!: Technology[];
  projects!: Project[];

  constructor(private projectService: ProjectService,
              private technologyService: TechnologyService) { }

  ngOnInit(): void {



    this.technologyService.getAllTechnologies().subscribe(tech => this.technologies = tech);
    this.projectService.getAllProjects().subscribe(project => {
      this.projects = project;

      this.projects.forEach(el => {
        el.technologyObject = el.technologies.map(id => this.technologies.find(tech => id === tech.id));
      });
    });

  }

}
