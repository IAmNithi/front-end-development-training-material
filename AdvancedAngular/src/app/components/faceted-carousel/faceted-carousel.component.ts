import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-faceted-carousel',
  templateUrl: './faceted-carousel.component.html',
  styleUrls: ['./faceted-carousel.component.css']
})
export class FacetedCarouselComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  route(){
    this.router.navigate(['./details']);
  }

}
