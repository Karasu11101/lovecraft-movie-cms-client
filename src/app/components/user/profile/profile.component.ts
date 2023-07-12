import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';
import { first } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  data: any;
  birthdate: any;
  registrationDate: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.retrieveProfile(JSON.parse(localStorage.getItem('user')).email);
  }

  retrieveProfile(email: string) {
    this.userService.getUser(email).pipe(first()).subscribe({
      next: res => {
        this.data = res;
        this.birthdate = moment(this.data.birthdate).locale('en').format('dddd DD MMMM YYYY');
        this.registrationDate = moment(this.data.createdAt).locale('en').format('dddd DD MMMM YYYY');
      }
    })
  }
}
