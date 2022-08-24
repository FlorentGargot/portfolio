import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error404/error404.component';
import { AsideComponent } from './aside/aside.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SingleProjectComponent } from './single-project/single-project.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HeaderComponent,
    MenuComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ExperiencesComponent,
    Error404Component,
    AsideComponent,
    ProjectCardComponent,
    SingleProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
