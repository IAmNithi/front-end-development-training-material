import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  contentData:any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(param => this.contentData = param)
  }

}
