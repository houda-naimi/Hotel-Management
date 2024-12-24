import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent  implements OnInit {
  clients: Client[] = [];
  selectedClient: Client | undefined;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe({
      next: (clients) => {
        this.clients = clients;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des clients', err);
        this.toastr.error('Une erreur est survenue lors du chargement des clients', 'Erreur');
      }
    });
  }

  editClient(id: string): void {
    if (id) {
      this.router.navigate([`/edit-client/${id}`]);
    } else {
      this.toastr.warning('ID du client non défini', 'Attention');
    }
  }

  deleteClient(id: string): void {
    if (id) {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
        this.clientService.deleteClient(id).subscribe({
          next: () => {
            this.toastr.success('Client supprimé avec succès !', 'Succès');
            this.loadClients();
          },
          error: (err) => {
            this.toastr.error('Une erreur est survenue.', 'Erreur');
          }
        });
      }
    }
  }

  selectClient(client: Client): void {
    this.selectedClient = client;
  }
}