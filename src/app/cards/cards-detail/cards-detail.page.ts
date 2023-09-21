import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';
import { Card, ModelCard, ModelCardSingle } from 'src/app/shared/model';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-cards-detail',
  templateUrl: './cards-detail.page.html',
  styleUrls: ['./cards-detail.page.scss'],
})
export class CardsDetailPage implements OnInit {
  // precisa atribuir valor inicial a propriedade
  id: string = "";
  card!: Card;
  modelCardSingle!: ModelCardSingle;
  dataLoaded: boolean = false;

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
      console.log(`id: ${this.id}`);
      this.cardsService.buscarCard(this.id)
      .subscribe(res=>{
        this.modelCardSingle = res;
        this.dataLoaded = true;
        console.log(`Dados carregados: ${res}`);
      });
       /* .pipe(
          debounceTime(15000),
          distinctUntilChanged(),
          switchMap(async (res) => this.modelCardSingle = res)
        );*/

        console.log(this.modelCardSingle);
    }
  }
}