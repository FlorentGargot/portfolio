import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./error404/error404.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SingleProjectComponent } from "./single-project/single-project.component";
import { TechnologiesComponent } from "./technologies/technologies.component";

const routes: Routes = [
    {path:'', component: LandingpageComponent},
    {path:'technos', component: TechnologiesComponent},
    {path:'projects', component: ProjectsComponent},
    {path:'projects/:id', component: SingleProjectComponent},
    {path:'experience', component: ExperiencesComponent},
    {path: '**', pathMatch: 'full', component: Error404Component}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}