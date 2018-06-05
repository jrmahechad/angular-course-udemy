import { EventEmitter } from '@angular/core';

export class CountService {
  activeToInactive = 0;
  inactiveToActive = 0;

  updateCounters = new EventEmitter<{ activeToInactive: number, inactiveToActive: number }>();

  sendActiveToInactive() {
    this.activeToInactive++;
    console.log(this.activeToInactive);
    this.updateCounters.emit({ activeToInactive: this.activeToInactive, inactiveToActive: this.inactiveToActive });
  }

  sendInactiveToActive() {
    this.inactiveToActive++;
    console.log(this.inactiveToActive);
    this.updateCounters.emit({ activeToInactive: this.activeToInactive, inactiveToActive: this.inactiveToActive });
  }
}
