import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation.model';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';
import { ClientService } from '../../client/client.service';
import { ChambreService } from '../../chambre/chambre.service';
import { Chambre } from '../../chambre/chambre.model';
import { Client } from '../../client/client.model';

@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrl: './reservation-add.component.css'
})
export class ReservationAddComponent implements OnInit{
  reservation: Reservation = {
    id: '',
    dateRes: '',
    dateDebut: '',
    dateFin: '',
    nbAdulte: 1,
    nbKids: 0,
    clientId: '',
    chambreId: ''
  };
  clients: Client[] = [];
  chambresDisponibles: Chambre[] = [];
  message: string = '';
  success: boolean = true;
  today: string = new Date().toISOString().split('T')[0]; 

  constructor(
    private clientService: ClientService,
    private chambreService: ChambreService,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    const todayDate = new Date();
    this.today = todayDate.toISOString().split('T')[0];
    
    
    this.reservation.dateRes = this.today;
    
    this.clientService.getClients().subscribe((data) => {
      this.clients = data;
    });
    this.chambreService.getChambres().subscribe((data) => {
      this.chambresDisponibles = data.filter((chambre) => chambre.etat === 'disponible');
    });
  }

  validateDates(): boolean {
    return new Date(this.reservation.dateDebut) < new Date(this.reservation.dateFin);
  }

 
  onSubmit() {
    if (!this.validateDates()) {
      this.message = 'La date de début doit être inférieure à la date de fin.';
      this.success = false;
      return;
    }

   
    this.reservation.id = `reservation-${Date.now().toString()}`;

    this.reservationService.addReservation(this.reservation).subscribe({
      next: (response) => {
        this.message = 'Réservation ajoutée avec succès!';
        this.success = true;
        this.resetForm();
      },
      error: (err) => {
        this.message = 'Erreur lors de l\'ajout de la réservation.';
        this.success = false;
      }
    });
  }

  resetForm() {
    this.reservation = {
      id: '',
      dateRes: '',
      dateDebut: '',
      dateFin: '',
      nbAdulte: 1,
      nbKids: 0,
      clientId: '',
      chambreId: ''
    };
  }
}