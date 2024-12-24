import { Component } from '@angular/core';
import { ChambreService } from '../chambre.service';
import { Router } from '@angular/router';
import { Chambre } from '../chambre.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrl: './chambre-list.component.css'
})
export class ChambreListComponent {

  chambres: Chambre[] = [];

  constructor(
    private chambreService: ChambreService,
    private router: Router,
    private toastr: ToastrService 
  ) { }

  ngOnInit(): void {
    this.loadChambres();
  }

  
  loadChambres(): void {
    this.chambreService.getChambres().subscribe((chambres) => {
      this.chambres = chambres;
    });
  }

  
  editChambre(id: string): void {
    if (id) {
      this.router.navigate([`/edit-chambre/${id}`]); 
    } else {
      console.log('ID de la chambre non défini');
    }
  }

  
  deleteChambre(id: string): void {
    if (id) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cette chambre ?')) {
        this.chambreService.deleteChambre(id).subscribe({
          next: () => {
            this.toastr.success(
              '<i class="fas fa-check-circle"></i> Chambre supprimée avec succès !',
              'Succès',
              { 
                enableHtml: true, 
                positionClass: 'toast-top-center' 
              }
            );
            this.loadChambres(); 
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
        '<i class="fas fa-exclamation-circle"></i> ID de la chambre non défini',
        'Attention',
        { 
          enableHtml: true, 
          positionClass: 'toast-top-center'
        }
      );
    }
  }
}
