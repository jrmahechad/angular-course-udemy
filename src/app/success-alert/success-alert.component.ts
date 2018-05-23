import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<label class='alert alert-success'>{{success}}</label>`,
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  success = 'THIS IS A SUCCESS!!';
  constructor() { }

  ngOnInit() {
  }

}
