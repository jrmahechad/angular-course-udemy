import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '../../../node_modules/@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dateStorageService: DataStorageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  onSaveData() {
    this.dateStorageService.storeRecipes().subscribe(
      (response: Response) => console.log(response)
    );
  }
  onFetchData() {
    this.dateStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }



}
