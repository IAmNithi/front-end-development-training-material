import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() sliderImage: any;
  constructor() { }

  ngOnInit() {
    console.log(this.sliderImage);
  }

}
