import { Component } from '@angular/core';
import { Chambre } from '../chambre.model';
import { ChambreService } from '../chambre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chambre-edit',
  templateUrl: './chambre-edit.component.html',
  styleUrl: './chambre-edit.component.css'
})
export class ChambreEditComponent {
  chambre!: Chambre;

  constructor(
    private chambreService: ChambreService,
    private route: ActivatedRoute,
    private router: Router,  private toastr: ToastrService 
  ) {}

  ngOnInit(): void {
    const chambreId = this.route.snapshot.paramMap.get('id');
    if (chambreId) {
      this.chambreService.getChambreById(chambreId).subscribe((chambre) => {
        this.chambre = chambre;
      });
    }
  }

  saveChambre(): void {
    if (this.chambre) {
      this.chambreService.updateChambre(this.chambre.id, this.chambre).subscribe({
        next: () => {
         
          this.toastr.success('La chambre a été modifiée avec succès!', 'Succès');
          this.router.navigate(['chambres']); 
        },
        error: (err) => {
         
          this.toastr.error('Une erreur est survenue lors de la modification.', 'Erreur');
        }
      });
    }
  }
}
