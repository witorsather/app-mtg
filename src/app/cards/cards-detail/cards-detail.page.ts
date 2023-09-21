import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';
import { Card, ModelCard } from 'src/app/shared/model';

@Component({
  selector: 'app-cards-detail',
  templateUrl: './cards-detail.page.html',
  styleUrls: ['./cards-detail.page.scss'],
})
export class CardsDetailPage implements OnInit {
  // precisa atribuir valor inicial a propriedade
  id: string = "";
  modelCard: ModelCard | undefined;
  card!: Card;

  constructor(
    private route: ActivatedRoute,
    private cardsService: CardsService
  ) {
     console.log("deu certo card detail");
  }

  ngOnInit() {
    const idDaRota = this.route.snapshot.paramMap.get('id');

    if (idDaRota !== null) {
      //obtem o valor do parametro cardId da url
      this.id = idDaRota;
      
      this.cardsService.buscar(this.id).subscribe((modelCard: ModelCard) => {
        this.card = modelCard.cards[0];
        console.log(this.card);
      });
    }
  }
}