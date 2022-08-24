import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../model/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {

  project?: Project;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const projectId = +this.route.snapshot.params['id'];
    this.projectService.getProjectById(projectId).subscribe(project => this.project = project);
  }

}
