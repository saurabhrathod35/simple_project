import { Component, OnInit } from '@angular/core';
import Row from '../../models/Row';
import Model from '../../models/Model';
@Component({
  selector: 'app-layout',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  rows: Row[] = [];

  constructor(private model: Model) { }

  ngOnInit() {
    this.rows = this.model.getAllRows();
    // this.model.findPageById('page1')
    //   .then(page => this.rows = page.rows);
  }

  appendRow() {
    this.model.appendRow();
  }

}
