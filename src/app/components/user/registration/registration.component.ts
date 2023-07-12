import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Za-z]{3,30})$/)]),
    surname: new FormControl('', [Validators.required, Validators.pattern(/^([A-Za-z]{3,30})$/)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    birthdate: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required),
    accetto: new FormControl(false, Validators.requiredTrue)
  })

  constructor(private router: Router, private modalService: NgbModal, private userService: UserService) {}

  onSubmit() {
    console.log(this.form.value);
    const user = {
      username: this.form.value.username,
      name: this.form.value.name,
      surname: this.form.value.surname,
      email: this.form.value.email,
      dateOfBirth: this.form.value.birthdate,
      password: this.form.value.password
    }
    this.userService.createUser(user).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl('home');
      },
      error: (e) => {
        console.log(e);
      }
    })
    this.userService.userData.next(user);
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

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modale privacy', size: 'lg', centered: true}).result
    .then((res) => {
      console.log('azione da eseguire in caso positivo, titolo')
    })
    .catch((res) => {
      console.log('nessuna azione da eseguire')
    })
  }
}
