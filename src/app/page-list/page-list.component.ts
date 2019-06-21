import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import PageService from '../services/PageService';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  constructor(private service: PageService,
              private router: ActivatedRoute) { }

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
    const pageObj = {
      title: 'New Page'
    }
    this.service.createPage(this.websiteId, pageObj)
      .then(page => this.pages.push(pageObj))
      .catch(error => console.log(error))

  }
}
