import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, Model } from 'src/app/shared/model';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.scss'],
})
export class CardsDetailsComponent implements OnInit {

  id: string | null = "";
  cardsResolver: Model | undefined;
  name: string | undefined;
  manaCost: string | undefined;
  imageUrl: string | undefined;
  
  constructor(private route: ActivatedRoute) { 
    this.id = route.snapshot.paramMap.get('id');
    this.cardsResolver = this.route.snapshot.data['cardsResolver'];  // Acesso ao objeto retornado pelo resolver

    if (this.id !== null && this.cardsResolver?.cards) {
      const cardIndex = parseInt(this.id); 
      const selectedCard = this.cardsResolver.cards[cardIndex];
      this.name = selectedCard.name;
      this.manaCost = selectedCard.manaCost;
      this.imageUrl = selectedCard.imageUrl;

    }
  }

  ngOnInit() {}

}
