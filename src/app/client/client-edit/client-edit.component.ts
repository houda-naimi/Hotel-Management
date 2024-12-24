import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrl: './client-edit.component.css'
})
export class ClientEditComponent {
    client!: Client;
  
    constructor(
      private clientService: ClientService,
      private route: ActivatedRoute,
      private router: Router
    ) { }
  
    ngOnInit(): void {
      const clientId = this.route.snapshot.paramMap.get('id');
      if (clientId) {
        this.clientService.getClientById(String(clientId)).subscribe(client => {
          this.client = client; 
        });
      }
    }
  
    saveClient(): void {
      if (this.client) {
        this.clientService.updateClient(this.client.id!, this.client).subscribe(() => {
          this.router.navigate(['clients']); 
        });
      }
    }
  }