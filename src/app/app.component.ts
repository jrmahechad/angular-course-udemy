import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = false;
  log = [];

  onClick() {
    this.showParagraph = !this.showParagraph;
    this.log.push(Math.floor(Date.now()));
  }
  getBackgroundColor(l) {
    return this.log.indexOf(l) > 4 ? 'blue' : '';
  }
  getWhiteText(l) {
    return this.log.indexOf(l) > 4;
  }
}
