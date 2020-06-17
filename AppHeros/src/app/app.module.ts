import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas

import { APP_ROUTING } from './app.routes';

// Servicios

import { HeroesService } from './services/heroes.service';
import { HttpClientModule } from '@angular/common/http'
// Componentes

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FindherosComponent } from './components/findheros/findheros.component';
import { HerocardComponent } from './components/herocard/herocard.component';
import { NewheroComponent } from './newhero/newhero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    FindherosComponent,
    HerocardComponent,
    NewheroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
