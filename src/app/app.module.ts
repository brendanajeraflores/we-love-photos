import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { routing, AppRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GrdFilterPipe } from './grd-filter.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { UsuarioComponent } from './components/usuario.component';
import { AlbumComponent } from './components/album.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    AlbumComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing,
    FlexLayoutModule,
    Ng2SearchPipeModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
