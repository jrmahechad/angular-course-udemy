import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberChanges = new EventEmitter<{currentNumber: number}>();
  @Output() stopGame = new EventEmitter<boolean>();
  currentNumber: number;
  myInterval;

  constructor() { }

  ngOnInit() {
  }
  OnStartGame() {
    this.currentNumber = 0;
    if (this.myInterval) {
      this.OnStopGame();
    }

    this.myInterval = setInterval(() => { this.increaseNumber(); }, 1000);
  }
  OnStopGame() {
    clearInterval(this.myInterval);
    this.stopGame.emit(true);
  }

  increaseNumber() {
    this.currentNumber++;
    this.numberChanges.emit({currentNumber: this.currentNumber});
    console.log(this.currentNumber);
  }
}
