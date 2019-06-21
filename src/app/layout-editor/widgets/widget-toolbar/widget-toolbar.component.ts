import {Component, Input, OnInit} from '@angular/core';
import PageModel from '../../../models/PageModel';
import Model from '../../../models/Model';

@Component({
  selector: 'app-widget-toolbar',
  templateUrl: './widget-toolbar.component.html',
  styleUrls: ['./widget-toolbar.component.css']
})
export class WidgetToolbarComponent implements OnInit {
  hideWidgetToolbar = true
  @Input() row;
  @Input() col;
  @Input() widget;

  constructor(private model: Model) { }

  ngOnInit() {
  }

  deleteWidget() {
    this.model.deleteWidget(this.row, this.col, this.widget)
  }

  moveWidgetUp() {
    this.model.moveWidgetUp(this.row, this.col, this.widget)
  }

  moveWidgetDown() {
    this.model.moveWidgetDown(this.row, this.col, this.widget)
  }

  moveWidgetLeft() {

  }

  moveWidgetRight() {

  }
}
