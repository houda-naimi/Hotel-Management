import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrl: './reservation-detail.component.css'
})
export class ReservationDetailComponent implements OnInit {
  reservationId: string | null = null;
  reservation: Reservation | null = null;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.reservationId = this.route.snapshot.paramMap.get('id');

    if (this.reservationId) {
      this.reservationService.getReservationById(this.reservationId).subscribe({
        next: (data) => {
          this.reservation = data;
        },
        error: (err) => {
          console.error('Erreur lors du chargement des détails :', err);
          this.router.navigate(['/reservations']);
        }
      });
    }
  }
}
