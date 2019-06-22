import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import PageService from '../services/PageService';
import {PageModel} from '../models/PageModel';
import { MatDialog } from '@angular/material';
import { ConfigurePageComponent } from './configure-page/configure-page.component';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  constructor(private service: PageService,
              private router: ActivatedRoute,public dialog: MatDialog) { }

  pages = []
  websiteId = ''

  ngOnInit() {
    this.router.params.subscribe(params =>
    {
      this.websiteId = params.websiteId;
      this.service.findPagesForWebsite(params.websiteId)
        .then(pages => this.pages = pages)
    }
    )
  }

  appendPage() {
    let tmp = new PageModel();
    const pageObj = {
      title: 'New Page'
    }
    const dialogRef = this.dialog.open(ConfigurePageComponent, {
      width: '250px',
      data: tmp
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if(result){
        // this.websites[index] = result;
        this.service.createPage(this.websiteId, result)
          .then(page => this.pages.push(page))
          .catch(error => console.log(error))
      }
      },error=>{
          console.log('something wrong');
      })


  }
}
