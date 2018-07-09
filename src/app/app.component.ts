import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statusOptions = ['Stable', 'Critical', 'Finished'];
  invalidNames = ['Test'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      // name: new FormControl(null, [Validators.required, this.invalidNamesValidator.bind(this)]),
      name: new FormControl(null, [Validators.required], this.invalidNamesValidatorAsync.bind(this)),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('Critical'),
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  invalidNamesValidator(control: FormControl): { [s: string]: boolean } {
    if (this.invalidNames.indexOf(control.value) !== -1) {
      return { 'invalidName': true };
    }
    return null;
  }

  invalidNamesValidatorAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.invalidNamesValidator(control));
      }, 1500);
    });

    return promise;
  }
}
