import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyBQudcQaK6biQlgtn50PHLCb71p4Uk-Kew',
      authDomain: 'angular-course-udemy.firebaseapp.com',
    };
    firebase.initializeApp(config);
  }
}
