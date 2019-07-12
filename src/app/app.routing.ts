import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { UsuarioComponent } from './components/usuario.component';
import { AlbumComponent } from './components/album.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component:HomeComponent},
    //{path: '**', component: HomeComponent},
    {path: 'usuario/:id', component: UsuarioComponent},
    { path: 'album/:idUsuario/:idAlbum', component: AlbumComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);