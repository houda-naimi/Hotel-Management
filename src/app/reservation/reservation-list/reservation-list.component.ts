import { Component } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reservation } from '../reservation.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
 
})
export class ReservationListComponent {

  reservations: Reservation[] = [];
  searchTerm: string = '';

  constructor(
    private reservationService: ReservationService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadReservations();
  }


  loadReservations(): void {
    this.reservationService.getReservations().subscribe((reservations) => {
      this.reservations = reservations;
    });
  }

  
  editReservation(id: string): void {
    if (id) {
      this.router.navigate([`/edit-reservation/${id}`]); 
    } else {
      console.log('ID de la réservation non défini');
    }
  }


  deleteReservation(id: string): void {
    if (id) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cette réservation ?')) {
        this.reservationService.deleteReservation(id).subscribe({
          next: () => {
            this.toastr.success(
              '<i class="fas fa-check-circle"></i> Réservation supprimée avec succès !',
              'Succès',
              {
                enableHtml: true,
                positionClass: 'toast-top-center' 
              }
            );
            this.loadReservations(); 
          },
          error: () => {
            this.toastr.error(
              '<i class="fas fa-exclamation-triangle"></i> Une erreur est survenue.',
              'Erreur',
              {
                enableHtml: true,
                positionClass: 'toast-top-center'
              }
            );
          }
        });
      }
    } else {
      this.toastr.warning(
        '<i class="fas fa-exclamation-circle"></i> ID de la réservation non défini',
        'Attention',
        {
          enableHtml: true,
          positionClass: 'toast-top-center'
        }
      );
    }
  }



  filteredReservations() {
    if (!this.searchTerm) {
      return this.reservations; 
    }
    return this.reservations.filter(reservation => {
      const dateRes = new Date(reservation.dateRes); 
      const dateDebut = new Date(reservation.dateDebut); 
      const dateFin = new Date(reservation.dateFin); 
  
      return (
        reservation.id.toString().includes(this.searchTerm) ||
        reservation.clientId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        dateRes.toLocaleDateString().includes(this.searchTerm) ||
        dateDebut.toLocaleDateString().includes(this.searchTerm) ||
        dateFin.toLocaleDateString().includes(this.searchTerm) ||
        reservation.nbAdulte.toString().includes(this.searchTerm) ||
        reservation.nbKids.toString().includes(this.searchTerm) ||
        reservation.chambreId.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }
  
}
