import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    birthdate: new FormControl('', Validators.required),

    password: new FormControl('', [Validators.required,
      Validators.minLength(8),
    Validators.maxLength(16), Validators.pattern('[A-Za-z0-9\p{P}\p{S}+]')]),
    ripetiPassword: new FormControl('', [Validators.required,
      Validators.minLength(8),
    Validators.maxLength(16), Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]')]),
    accetto: new FormControl(false, Validators.requiredTrue)
  })

  onSubmit() {
    console.log(this.form);
  }
}
