import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { USERS } from '../mocks/user.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData = new ReplaySubject();
  userRole = new ReplaySubject();

  apiBaseUrl = 'api/users';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User[]> {
    USERS.push(user);
    return of (USERS);
    // return this.http.post<User>(`${this.apiBaseUrl}/signup`, user);
  }

  getUser(email: string): Observable<User> {
    const user = USERS.find(user => user.email === email);
    return of (user);
    // const data = {email: email};
    // return this.http.post<User>(`${this.apiBaseUrl}/user`, data);
  }
}
