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

            this.userService.userRole.next(res.role);

            this.messageService.add({severity: 'error', summary: 'Login error', detail: 'Username or password are incorrect', life: 2000});
            setTimeout(() => {
              this.router.navigateByUrl('home');
            }, 2000);
          } else {
            this.loginError = 'Username or password are incorrect';
            this.messageService.add({severity: 'error', summary: 'Login error', detail: 'Username or password are incorrect', life: 2000});
          }
        },
        error: (e) => {
          console.log(e);
          this.loginError = 'Username or password are incorrect';
          this.messageService.add({severity: 'error', summary: 'Login error', detail: 'Username or password are incorrect', life: 2000});
        }
      })
    }
  }

}
