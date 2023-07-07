import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginError = "";

  constructor(private auth: AuthService, private router: Router, private messageService: MessageService, private userService: UserService) {}

  onSubmit(form) {
    if(form.email != '' && form.password != '') {
      this.auth.login(form.email, form.password).subscribe({
        next: (res) => {
          if(res) {
            this.auth.saveStorage(res);

            // this.userService.ruoloUtente
          }
        }
      })
    }
  }

}
