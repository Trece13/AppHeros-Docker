
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';


const APP_ROUTES: Routes = [

    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'heroes/:texto', component: HeroesComponent},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }// ruta alternativa en caso de que no encuentre la ruta

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
