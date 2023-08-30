import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/model';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.page.html',
  styleUrls: ['./cards-list.page.scss'],
})
export class CardsListPage implements OnInit {

  cards! : Card[];

  constructor(private service: CardsService) { }

  ngOnInit() {
    this.service.listar().subscribe(response => {
      this.cards = response.cards;
    })
  }
}
