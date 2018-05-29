import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: { cNumber: number, type: string }[];

  constructor() {
    this.numbers = [];
  }

  onNumberChanges(data: { currentNumber: number }) {
    console.log(data);
    if (data.currentNumber % 2 === 0) {
      this.numbers.push({ cNumber: data.currentNumber, type: 'even' });
    } else {
      this.numbers.push({ cNumber: data.currentNumber, type: 'odd' });
    }
    console.log(this.numbers);

  }

  resetNumbers(value: boolean) {
    if (value) {
      this.numbers = [];
    }

  }
}
