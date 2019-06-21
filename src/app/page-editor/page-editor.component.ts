import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import PageService from '../services/PageService';

@Component({
  selector: 'app-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.css']
})
export class PageEditorComponent implements OnInit {

  constructor(private service: PageService,
              private router: ActivatedRoute) { }

  page = {
    _id: '',
    title: 'Dummy title',
    rows: []
  }
  websiteId = ''
  pageId = ''

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.websiteId = params.websiteId;
      this.pageId = params.pageId;
      this.service.findPageById(this.websiteId, this.pageId)
        .then(page => this.page = page)
    })
  }

  appendRow = () =>
  {
    this.page.rows.push({
      title: 'New Row',
      columns: []
    })
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

}
