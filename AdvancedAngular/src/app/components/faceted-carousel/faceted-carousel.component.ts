import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-faceted-carousel',
  templateUrl: './faceted-carousel.component.html',
  styleUrls: ['./faceted-carousel.component.css']
})
export class FacetedCarouselComponent implements OnInit {
  @Input() slides: any;
  Pannel1: any;
  Pannel2: any;
  Pannel3: any;
  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    this.Pannel1 = this.slides.FacetCarosal.Slide1;
    this.Pannel2 = this.slides.FacetCarosal.Slide2;
    this.Pannel3 = this.slides.FacetCarosal.Slide3;
  }
  route(param){
    console.log(param);
    this.data.changeMessage(param);
    this.router.navigate(['./details']);
  }

}
