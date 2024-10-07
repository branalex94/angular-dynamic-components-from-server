import { Routes } from '@angular/router';
import { Vista1Component } from './Pages/vista-1/vista-1.component';

export const routes: Routes = [
    {
        path: 'vista-1',
        component: Vista1Component
    },
    {
        path:'',
        pathMatch: 'full',
        redirectTo: 'vista-1'
    }
];
