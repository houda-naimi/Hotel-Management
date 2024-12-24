import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectHotelmanagement';
  isLoggedIn: boolean = false;
  displayClientList = false;

  constructor(private authService: AuthService, private router: Router) {}
  showClientList(): void {
    this.displayClientList = !this.displayClientList; 
  }
  logout() {
    this.authService.logout();  
    this.router.navigate(['/login']);  
  }

}

