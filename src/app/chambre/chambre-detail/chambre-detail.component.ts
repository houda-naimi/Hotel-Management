import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChambreService } from '../chambre.service';

@Component({
  selector: 'app-chambre-detail',
  templateUrl: './chambre-detail.component.html',
  styleUrl: './chambre-detail.component.css'
})
export class ChambreDetailComponent {
  chambreId: string | null = null;
  chambre: any;

  constructor(
    private route: ActivatedRoute,
    private chambreService: ChambreService 
  ) {}

  ngOnInit(): void {
 
    this.chambreId = this.route.snapshot.paramMap.get('id');

    
    if (this.chambreId) {
      this.chambreService.getChambreById(this.chambreId).subscribe((data) => {
        this.chambre = data;
      });
    }
  }
}
