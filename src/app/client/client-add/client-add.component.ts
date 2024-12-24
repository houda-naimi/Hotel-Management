import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent {
  client: Client = { id: '', nom: '', prenom: '', tel: '', email: '' }; 
  message: string = '';
  success: boolean = true;

  constructor(private clientService: ClientService, private router: Router) {}

  onSubmit() {
    
    this.client.id = `client-${Date.now().toString()}`;
    
    this.clientService.addClient(this.client).subscribe({
      next: (response) => {
        this.message = 'Client ajouté avec succès!';
        this.success = true;
        this.resetForm();
        this.router.navigate(['/clients']); 
      },
      error: (err) => {
        this.message = "Erreur lors de l'ajout du client.";
        this.success = false;
      }
    });
  }

  resetForm() {
    
    this.client = { id: '', nom: '', prenom: '', tel: '', email: '' };
  }
}