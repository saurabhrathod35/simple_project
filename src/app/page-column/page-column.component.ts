import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfigureWidgetComponent } from './configure-widget/configure-widget.component';
import Widget from '../models/Widget';
import WidgetService from '../services/widgetService';

@Component({
  selector: 'app-page-column',
  templateUrl: './page-column.component.html',
  styleUrls: ['./page-column.component.css']
})
export class PageColumnComponent implements OnInit {
@Input() column;
  constructor(private service:WidgetService ,public dialog: MatDialog) { }
  settingOptions=[{
      name:'header',
      title:'Header'
    },{
      name:'paragraph',
      title:'paragraph'
    },
    {
      name:'html',
      title:'HTML'
    },
    {
      name:'youtube',
      title:'YouTube'
    }, 
    {
      name:'image',
      title:'Image'
    },
    {
      name:'code',
      title:'Code'
    }
  ]

  ngOnInit() {
  }

  addWidget(type){
    let tmp = new Widget(type);
    const dialogRef = this.dialog.open(ConfigureWidgetComponent, {
      width: '250px',
      data: tmp
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if(result){
        // this.column.widgets.push(result);
        this.service
        .createWebsite(result)
        .then(website => this.column.widgets.push(website));
      }
      },error=>{
          console.log('something wrong');
      })    
  }

  addOption(){

  }

}
