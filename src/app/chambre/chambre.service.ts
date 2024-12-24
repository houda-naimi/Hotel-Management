import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from './chambre.model';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private baseUrl = 'http://localhost:3000/chambres'; 

  constructor(private http: HttpClient) {}

  
  getChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.baseUrl);
  }

  
  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(this.baseUrl, chambre);
  }

 
  getChambreById(id: string): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.baseUrl}/${id}`);
  }
  

 
  updateChambre(id: string, chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.baseUrl}/${id}`, chambre);
  }

 
  deleteChambre(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
