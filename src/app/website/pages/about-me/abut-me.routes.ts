import { Routes } from "@angular/router";
import { AboutMeComponent } from "./about-me.component";
import { EducationComponent } from "./components/education/education.component";
import { ExperienceComponent } from "./components/experience/experience.component";

export const routes: Routes = [
    {
        path: '',
        component: AboutMeComponent,
        children: [
            {
                path: '', redirectTo: 'education', pathMatch: 'full'
            },
            {
                path: 'education',
                component: EducationComponent
            },
            {
                path: 'experience',
                component: ExperienceComponent
            },
        ]
    }
]