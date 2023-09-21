import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';
<<<<<<< HEAD
import { Card, ModelCard, ModelCardSingle } from 'src/app/shared/model';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
=======
import { Card, ModelCard } from 'src/app/shared/model';
>>>>>>> 711c471fbefa44845ee03327581b86d15cf87200

@Component({
  selector: 'app-cards-detail',
  templateUrl: './cards-detail.page.html',
  styleUrls: ['./cards-detail.page.scss'],
})
export class CardsDetailPage implements OnInit {
  // precisa atribuir valor inicial a propriedade
  id: string = "";
<<<<<<< HEAD
  card!: Card;
  modelCardSingle!: ModelCardSingle;
  dataLoaded: boolean = false;
=======
  modelCard: ModelCard | undefined;
  card!: Card;
>>>>>>> 711c471fbefa44845ee03327581b86d15cf87200

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
<<<<<<< HEAD
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
=======
      
      this.cardsService.buscar(this.id).subscribe((modelCard: ModelCard) => {
        this.card = modelCard.cards[0];
        console.log(this.card);
      });
>>>>>>> 711c471fbefa44845ee03327581b86d15cf87200
    }
  }
}