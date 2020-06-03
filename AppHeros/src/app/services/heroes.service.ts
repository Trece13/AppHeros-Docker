import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HeroesService {

    public heroes: Heroe[] = [] 
    
    constructor(private http:HttpClient ) {
        this.getListHeros()
    }

    getHeroes(): Heroe[] {
        return this.heroes;
    }

    async getListHeros(){
        await this.http.get("/heros")
        .subscribe((data:any)=>{ this.heroes = data})
    }

    getHeroe(i: string): Heroe {
        return this.heroes[i];
    }

    BuscarHeroes(texto: string): Heroe [] {
        if(this.heroes.length === 0 || texto.trim() === ""){
            this.getListHeros();
        }
        const lstHeros: Heroe [] = [];
        for ( const hero of this.heroes ) {
          const nombre = hero.nombre.toLowerCase().trim();
          texto = texto.toLowerCase().trim();
          if (nombre.indexOf(texto) >= 0) {
            lstHeros.push(hero);
          }
        }
        return lstHeros;
      }
}

export interface Heroe {
    idx: number;
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    imgLog?: string;
}
