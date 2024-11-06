import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail.component";
import { ContactMeComponent } from "./pages/contact-me/contact-me.component";
import { ServicesComponent } from "./pages/services/services.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";

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
    {
        path: 'contact-me',
        component: ContactMeComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'about',
        loadChildren: () => import('./pages/about-me/abut-me.routes').then(m => m.routes)
    }

]