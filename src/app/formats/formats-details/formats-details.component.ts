import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-formats-details',
  templateUrl: './formats-details.component.html',
  styleUrls: ['./formats-details.component.scss'],
})
export class FormatsDetailsComponent  implements OnInit {

  id: string | null = "";
  
  constructor(route: ActivatedRoute) { 
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}

}
