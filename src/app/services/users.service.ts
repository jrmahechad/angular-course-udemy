import { EventEmitter, Injectable } from '@angular/core';
import { CountService } from './count.service';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CountService) {}

  userSetToInactive = new EventEmitter<number>();
  userSetToActive = new EventEmitter<number>();

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
    this.counterService.sendInactiveToActive();
  }

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
    this.counterService.sendActiveToInactive();
  }

}
