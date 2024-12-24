import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:3000/clients'; 

  constructor(private http: HttpClient) {}


 
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }

  
  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client);
  }

 
  getClientById(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/${id}`);
  }

  
  updateClient(id: string, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.baseUrl}/${id}`, client);
  }

 
  deleteClient(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
