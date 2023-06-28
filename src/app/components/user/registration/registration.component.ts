import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Z][A-Za-z ,.'`-]{3,30})$/)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    birthdate: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required),
    accetto: new FormControl(false, Validators.requiredTrue)
  })

  onSubmit() {
    console.log(this.form.value);
  }

  checkPassword(): boolean {
    let password = this.form.controls.password.value;
    let ripetiPassword = this.form.controls.ripetiPassword.value;
    if(password === ripetiPassword) {
      return true;
    } else {
      return false;
    }
  }
}
