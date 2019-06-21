import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() row;
  constructor() { }

  ngOnInit() {
  }

}
