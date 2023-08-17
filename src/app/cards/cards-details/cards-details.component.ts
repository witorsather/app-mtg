import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.scss'],
})
export class CardsDetailsComponent  implements OnInit {

  id: string | null = "";
  
  constructor(route: ActivatedRoute) { 
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}

}
