import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { CountService } from './services/count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];
  activeToInactive = 0;
  inactiveToActive = 0;
  constructor(private usersService: UsersService, private countService: CountService) {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;

    this.usersService.userSetToInactive.subscribe((id: number) => {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
    });

    this.usersService.userSetToActive.subscribe((id: number) => {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
    });

    this.countService.updateCounters.subscribe((data: { activeToInactive: number, inactiveToActive: number }) => {
       this.activeToInactive = data.activeToInactive;
       this.inactiveToActive = data.inactiveToActive;
    });

  }



}
