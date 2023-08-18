import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Model } from '../shared/model';
import { CardsService } from './cards.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CardsResolver implements Resolve<Model> {
    
    constructor(private cardsService: CardsService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Model> {
        return this.cardsService.getCards();
    }
}