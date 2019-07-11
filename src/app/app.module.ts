import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routing, AppRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { UsuarioComponent } from './components/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
