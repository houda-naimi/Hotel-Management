import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private toastr: ToastrService,  
    private router: Router,         
    private authService: AuthService  
  ) { }

  onSubmit(registerForm: NgForm) {
    if (registerForm.valid) {
      const { username, email, password } = registerForm.value;

      if (password !== registerForm.value.confirmPassword) {
        this.toastr.error('Les mots de passe ne correspondent pas.', 'Erreur');
        return;
      }

      const newUser = {
        username,
        email,
        password
      };

      
      this.authService.register(newUser).subscribe(
        (response) => {
         
          this.toastr.success('Compte créé avec succès!', 'Succès');
          setTimeout(() => {
            this.router.navigate(['/login']);  
          }, 2000);
        },
        (error) => {
          
          this.toastr.error('Erreur lors de la création du compte.', 'Erreur');
        }
      );
    } else {
      this.toastr.error('Le formulaire n\'est pas valide', 'Erreur');
    }
  }
}
