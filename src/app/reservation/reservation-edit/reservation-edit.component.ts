import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../reservation.model';
import { ReservationService } from '../reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreService } from '../../chambre/chambre.service';

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrl: './reservation-edit.component.css'
})
export class ReservationEditComponent {
  reservation: Reservation = {
    id: '',
    dateRes: '',
    dateDebut: '',
    dateFin: '',
    nbAdulte: 0,
    nbKids: 0,
    clientId: '',
    chambreId: ''
  };
  message: string = '';
  success: boolean = false;
  today: string = new Date().toISOString().split('T')[0];
  chambres: any[] = [];  

  constructor(
    private reservationService: ReservationService,
    private chambreService: ChambreService,  
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const reservationId = this.route.snapshot.paramMap.get('id');
    if (reservationId) {
      this.reservationService.getReservationById(reservationId).subscribe((data) => {
        this.reservation = data;
      });
    
    }

    
    this.chambreService.getChambres().subscribe((data) => {
      this.chambres = data;
    });
  }

  
  validateDates(): boolean {
    if (this.reservation.dateDebut && this.reservation.dateFin) {
      return new Date(this.reservation.dateDebut) <= new Date(this.reservation.dateFin);
    }
    return false;
  }

  onSubmit(): void {
    const reservationId = this.route.snapshot.paramMap.get('id');
    if (reservationId) {
      this.reservationService.updateReservation(reservationId, this.reservation).subscribe(
        (updatedReservation) => {
          this.message = 'Réservation mise à jour avec succès!';
          this.success = true;
          setTimeout(() => this.router.navigate(['/reservations']), 2000);
        },
        (error) => {
          this.message = 'Erreur lors de la mise à jour de la réservation.';
          this.success = false;
        }
      );
    }
  }
}
