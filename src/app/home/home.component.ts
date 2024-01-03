import { Component, OnInit } from '@angular/core';
import { FormationService } from '../common/service/formation.service';
import { IFormation } from '../common/model/formation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public formations: IFormation[] = [];
  public errorMessage = '';
  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    this.chargeAllFormations();
  }

  // Méthode pour appeller la recharge depuis le site La bonne Alternance
  chargeAllFormations() {
    this.formationService.chargeAllFormations().subscribe({
      next: (data) => {
        this.formations = data;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }

  // Méthode pour retrouver toutes les formations enregistrés en BDD
  getAllFormations() {
    this.formationService.getAllFormations().subscribe({
      next: (data) => {
        this.formations = data;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }

  deleteFormation(formation: IFormation) {
    this.formationService.deleteFormation(formation.id).subscribe({
      next: () => {
        this.getAllFormations();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }
}
