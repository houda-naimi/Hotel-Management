import { Component } from '@angular/core';
import { ChambreService } from '../chambre.service';
import { Chambre } from '../chambre.model';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-chambre-add',
  templateUrl: './chambre-add.component.html',
  styleUrl: './chambre-add.component.css'
})
export class ChambreAddComponent {
  chambre: Chambre = { id: '', typeChambre: 'simple', prixSejour: 0, etat: '' };  
  message: string = '';
  success: boolean = true;

  constructor(private chambreService: ChambreService,private router: Router) {}


  onSubmit() {
    
    this.chambre.id = `chambre-${Date.now().toString()}`;
    
    this.chambreService.addChambre(this.chambre).subscribe({
      next: (response) => {
        this.message = 'Chambre ajoutée avec succès!';
        this.success = true;
        this.resetForm();
        this.router.navigate(['/chambres']);
      },
      error: (err) => {
        this.message = "Erreur lors de l'ajout de la chambre.";
        this.success = false;
      }
    });
  }
  
  

  resetForm() {
    this.chambre = { id: '', typeChambre: '', prixSejour: 0, etat: '' };
  }
}