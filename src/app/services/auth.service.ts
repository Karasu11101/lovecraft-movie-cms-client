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

  login(email: string, password: string): Observable<User> {
    const user = { email: email, password: password };
    return this.http.post<User>(`${this.apiBaseUrl}/login`, user)
  }

  saveStorage(dati: any) {
    const user = {
      username: dati.username,
      email: dati.email,
      password: dati.password,
      role: dati.role
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
