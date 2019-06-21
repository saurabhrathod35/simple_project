import {Component, Input, OnInit} from '@angular/core';
import Model from '../models/Model';

@Component({
  selector: 'app-column-toolbar',
  templateUrl: './column-toolbar.component.html',
  styleUrls: ['./column-toolbar.component.css']
})
export class ColumnToolbarComponent implements OnInit {

  hideToolbar = true;

  @Input() row;
  @Input() column;

  constructor(private model: Model) { }

  ngOnInit() {
  }

  addColumn() {
    this.model.insertColumnAfter(this.row, this.column);
  }

  deleteColumn() {
    this.model.deleteColumn(this.row, this.column);
  }

  spanColumnUp() {
    this.model.spanColumnUp(this.row, this.column);
  }

  spanColumnDown() {
    this.model.spanColumnDown(this.row, this.column);
  }

  moveColumnLeft() {
    this.model.moveColumnLeft(this.row, this.column);
  }

  moveColumnRight() {
    this.model.moveColumnRight(this.row, this.column);
  }

  moveColumnUp() {
    this.model.moveColumnUp(this.row, this.column);
  }

  moveColumnDown() {
    this.model.moveColumnDown(this.row, this.column);
  }

}
