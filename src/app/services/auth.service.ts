import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseUrl = 'api/users';

  constructor(private http: HttpClient, private userService: UserService) { }

  login(username: string, password: string): Observable<User> {
    const user = { username: username, password: password };
    return this.http.post<User>(`${this.apiBaseUrl}/login`, user)
  }

  saveStorage(dati: any) {
    const user = {
      username: dati.username,
      email: dati.email,
      password: dati.password
    }

    localStorage.setItem('user', JSON.stringify(user));
  }

  isLogged(): boolean {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

}
