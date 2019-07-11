import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { UsuarioComponent } from './components/usuario.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component:HomeComponent},
    //{path: '**', component: HomeComponent},
    {path: 'usuario/:id', component: UsuarioComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);