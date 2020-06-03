import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  Heroes: Heroe[] = [];
  constructor(public heroesService: HeroesService,
              private router: Router, private activatedRoute: ActivatedRoute) {
              this.heroesService.heroes = this.heroesService.getHeroes();
              activatedRoute.params.subscribe(params => {
              this.heroesService.heroes = this.heroesService.BuscarHeroes(params[ 'texto' ]);
              });
  }

  ngOnInit(): void {
  }

  verHeroe(i: number) {
      this.router.navigate(['/heroe', i]);
  }
}


