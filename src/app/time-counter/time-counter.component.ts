import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-time-counter',
  standalone: true,
  imports: [],
  templateUrl: './time-counter.component.html',
  styleUrl: './time-counter.component.scss',
})
export class TimeCounterComponent {
  secondes: number = 0;
  constructor() {}
  ngOnInit(): void {
    const compteur = interval(1000);
    compteur.subscribe({
      next: (v) => (this.secondes = v),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
    console.log(this.secondes);
  }
}
