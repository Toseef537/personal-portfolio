import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail.component";

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'project-detail',
        component: ProjectDetailComponent
    },

]