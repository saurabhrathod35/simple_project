import {Component, Input, OnInit} from '@angular/core';
import Model from '../../models/Model';

@Component({
  selector: 'app-col',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() row;
  @Input() column;

  hideToolbar = true;
  constructor(private model: Model) { }

  ngOnInit() {
  }

  appendWidget() {
    this.model.appendWidget(this.row, this.column);
  }
}
