import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-types-details',
  templateUrl: './types-details.component.html',
  styleUrls: ['./types-details.component.scss'],
})
export class TypesDetailsComponent  implements OnInit {

  id: string | null = "";
  
  constructor(route: ActivatedRoute) { 
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}

}
