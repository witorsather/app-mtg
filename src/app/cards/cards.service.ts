import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../shared/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private apiUrl = 'https://api.magicthegathering.io/v1/cards';

  constructor(private http: HttpClient) { }

  getCards(): Observable<Model> {
    return this.http.get<Model>(this.apiUrl);
  }
}
