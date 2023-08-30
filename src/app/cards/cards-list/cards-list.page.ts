import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/model';
import { CardsService } from '../cards.service';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.page.html',
  styleUrls: ['./cards-list.page.scss'],
})
export class CardsListPage implements OnInit {

  cards! : Card[];

  constructor(private service: CardsService, private navCtrl: NavController) { }

  ngOnInit() {
    this.service.listar().subscribe(response => {
      this.cards = response.cards;
      console.log(this.cards);
    })
  }

  irParaCardDetail(id: string) {
    //usar a instancia do navcontroller e o seu metodo navigateForward
    // passando como parametro a rota que esta o cards-detail e o parametro esperado, o id
    this.navCtrl.navigateForward(`/cards/${id}`);
  }
}
