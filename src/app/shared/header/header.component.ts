import { Component, DoCheck,ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MessageService]
})
export class HeaderComponent implements DoCheck {
  user: User;
  role: any;
  loginError = "";


  constructor(public auth: AuthService, private router: Router, private userService: UserService, private modal: NgbModal, private message: MessageService)
  { this.userService.userRole.subscribe( res => this.role = res); }

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.role = JSON.parse(localStorage.getItem('user')).role;
    } else {
      this.role = 'user';
    }
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('home');
  }

  onSubmit(form) {
    if(form.email != '' && form.password != '') {
      this.auth.login(form.email, form.password).subscribe({
        next: (res) => {
          if(res) {
            this.auth.saveStorage(res);

            this.userService.userRole.next(res.role);

            this.message.add({severity: 'error', summary: 'Login error', detail: 'Username or password are incorrect', life: 2000});
            setTimeout(() => {
              this.router.navigateByUrl('home');
            }, 2000);
          } else {
            this.loginError = 'Username or password are incorrect';
            this.message.add({severity: 'error', summary: 'Login error', detail: 'Username or password are incorrect', life: 2000});
          }
        },
        error: (e) => {
          console.log(e);
          this.loginError = 'Username or password are incorrect';
          this.message.add({severity: 'error', summary: 'Login error', detail: 'Username or password are incorrect', life: 2000});
        }
      })
    }
  }

  open(content: any) {
    this.modal.open(content, {ariaLabelledBy: 'login modal', size: 'm', centered: true}).result
    .then((res) => {
      this.router.navigateByUrl('home');
    })
    .catch((res) => {
      this.modal.dismissAll();
    })
  }
}
