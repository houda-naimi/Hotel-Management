import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  id: string;
  username: string;
  password: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private baseUrl = 'http://localhost:3000/users';  

  constructor(private http: HttpClient, private router: Router) {}


  login(username: string, password: string): Observable<any> {
    return this.http.get<User[]>(`${this.baseUrl}?username=${username}&password=${password}`).pipe( 
      map((users: User[]) => { 
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          this.isAuthenticated = true;
          return user; 
        } else {
          throw new Error('Nom d\'utilisateur ou mot de passe incorrect');
        }
      })
    );
  }

  
  register(user: any): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }

  logout() {
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
