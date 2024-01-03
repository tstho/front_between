import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IFormation } from '../model/formation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const springFormationApiURL = 'http://localhost:9000/formations';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  constructor(private http: HttpClient) {}

  chargeAllFormations() {
    return this.http.get<IFormation[]>(springFormationApiURL + '/charge');
  }

  getAllFormations() {
    return this.http.get<IFormation[]>(springFormationApiURL + '/all');
  }

  deleteFormation(id: number) {
    return this.http.delete<any>(springFormationApiURL + '/' + id);
  }
}
