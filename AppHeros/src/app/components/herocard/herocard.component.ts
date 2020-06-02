import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-herocard',
  templateUrl: './herocard.component.html',
  styleUrls: ['./herocard.component.css']
})
export class HerocardComponent implements OnInit {

  @Input() heroe: any =  {};
  @Input() idx: number;

  @Output() HeroSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.HeroSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  verHeroe() {
    // this.router.navigate(['/heroe', this.idx ]);
    this.HeroSeleccionado.emit(this.idx);
  }
}
