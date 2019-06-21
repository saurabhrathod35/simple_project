import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  @Input() row
  @Input() col
  @Input() widget

  constructor() { }

  ngOnInit() {
  }

}
