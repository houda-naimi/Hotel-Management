import { Component, Input } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {
  @Input() client: Client | undefined;

  constructor() { }

  ngOnInit(): void { }
}
