import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sets-details',
  templateUrl: './sets-details.component.html',
  styleUrls: ['./sets-details.component.scss'],
})
export class SetsDetailsComponent  implements OnInit {

  id: string | null = "";
  
  constructor(route: ActivatedRoute) { 
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}

}
