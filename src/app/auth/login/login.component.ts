import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private authService: AuthService,  
    private toastr: ToastrService,    
    private router: Router             
  ) { }

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      const { username, password } = loginForm.value;

      this.authService.login(username, password).subscribe(
        (response) => {
          this.toastr.success('Connexion réussie!', 'Succès');
          this.router.navigate(['home']);
        },
        (error) => {
          this.toastr.error('Nom d\'utilisateur ou mot de passe incorrect.', 'Erreur');
        }
      );
    } else {
      this.toastr.error('Le formulaire n\'est pas valide', 'Erreur');
    }
  }
}
