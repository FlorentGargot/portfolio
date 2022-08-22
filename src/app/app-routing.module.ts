import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TechnologiesComponent } from "./technologies/technologies.component";

const routes: Routes = [
    {path:'', component: LandingpageComponent},
    {path:'technos', component: TechnologiesComponent},
    {path:'projects', component: ProjectsComponent},
    {path:'experience', component: ExperiencesComponent}
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