import {Component, Input, OnInit} from '@angular/core';
import WebsiteService from '../services/WebsiteService';
import PageService from '../services/PageService';

@Component({
  selector: 'app-page-row',
  templateUrl: './page-row.component.html',
  styleUrls: ['./page-row.component.css']
})
export class PageRowComponent implements OnInit {

  @Input() row
  span = 6;
  @Input() websiteId;
  @Input() pageId;
  @Input() page;

  constructor(private service: PageService) { }

  ngOnInit() {
  }

  addColumn = () => {
    const column = {
      title: 'New Column',
      widgets: []
    }
    this.row.columns.push(column)
    this.service.updatePage(this.websiteId, this.pageId, this.page);

  }
}
