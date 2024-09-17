import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './pages/project/project.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'Contact',
        component: ContactComponent
    },
    {
        path: 'About',
        component: AboutComponent
    },
    {
        path: 'Project',
        component: ProjectComponent
    }
];
