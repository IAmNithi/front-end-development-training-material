import { Component, OnInit,Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-section',
  templateUrl: './detail-section.component.html',
  styleUrls: ['./detail-section.component.css']
})
export class DetailSectionComponent implements OnInit {
  @Input() content: any;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log('printing from detail section', this.content);
  }
  // linear-gradient(to right, #0f171e 12%, transparent 80%),url('{{content.bgimg}}
  getBackground(image){
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(to right, #0f171e 12%, transparent 80%),url(${image})`);
  }
}
