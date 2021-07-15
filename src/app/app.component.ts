import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'odds-and-evens-game';
  odds:number[] = [];
  evens: number[] = [];

  onIntervalFired(firedNumber: number) {
    console.log(firedNumber);
    if (firedNumber % 2 === 0) {
      this.evens.push(firedNumber);
    } else {
      this.odds.push(firedNumber);
    }
  }
}
