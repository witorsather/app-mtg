import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subtypes-details',
  templateUrl: './subtypes-details.component.html',
  styleUrls: ['./subtypes-details.component.scss'],
})
export class SubtypesDetailsComponent  implements OnInit {

  id: string | null = "";
  
  constructor(route: ActivatedRoute) { 
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}

}
