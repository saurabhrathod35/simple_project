import { Component, OnInit } from '@angular/core';
import WebsiteService from '../services/WebsiteService';
import { MatDialog } from '@angular/material';
import { ConfigureWebsiteComponent } from './configure-website/configure-website.component';
import { Website } from '../models/website';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  constructor(private service: WebsiteService,public dialog: MatDialog) { }

  websites:Array<Website> = [];
  editing = false;

  ngOnInit() {
    this.service.findAllWebsites()
      .then(websites => this.websites = websites);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.websites, event.previousIndex, event.currentIndex);
  }

  createWebsite(type,index?) {
    let tmp = new Website(type);
    const dialogRef = this.dialog.open(ConfigureWebsiteComponent, {
      width: '250px',
      data: tmp
    });

    dialogRef.afterClosed().subscribe((result:Website) => {
      console.log('The dialog was closed');
      if(result){
        this.websites[index] = result;
        this.service
        .createWebsite(result)
        .then(website => this.websites.push(website));
      }
      },error=>{
          console.log('something wrong');
      })
    }
  


  setEditing = (website, editing) => {
    website.editing = editing;
    if (editing === false) {
      this.service.updateWebsite(website._id, website)
        .then(status => console.log(status));
    }
  }

  deleteWebsite(website) {
    this.service.deleteWebsite(website._id)
      .then(status => {
        if (status.deletedCount === 1) {
          const websiteIndex = this.websites.indexOf(website);
          this.websites.splice(websiteIndex, 1)
        }
      });
  }
}
