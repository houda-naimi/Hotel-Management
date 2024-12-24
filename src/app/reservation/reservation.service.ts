import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from './reservation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
    private baseUrl = 'http://localhost:3000/reservations'; 
  
    constructor(private http: HttpClient) {}
  
    
    getReservations(): Observable<Reservation[]> {
      return this.http.get<Reservation[]>(this.baseUrl);
    }
  
   
    addReservation(reservation: Reservation): Observable<Reservation> {
      return this.http.post<Reservation>(this.baseUrl, reservation);
    }
  
   
    getReservationById(id: string): Observable<Reservation> {
      return this.http.get<Reservation>(`${this.baseUrl}/${id}`);
    }
  
   
    updateReservation(id: string, reservation: Reservation): Observable<Reservation> {
      return this.http.put<Reservation>(`${this.baseUrl}/${id}`, reservation);
    }
  

    deleteReservation(id: string): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
  }