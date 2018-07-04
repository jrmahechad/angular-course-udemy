import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  submitted = false;
  data = { email: '', subscription: '', password: '' };

  @ViewChild('f') assigmentForm: NgForm;

  onSubmit() {
    this.submitted = true;
    console.log(this.assigmentForm);
    this.data = { ...this.assigmentForm.value };
    this.assigmentForm.reset();
  }

}
