import {Injectable} from '@angular/core';

@Injectable()
export default class WebsiteService {
  WEBSITE_URL = 'http://localhost:3000/api/websites';

  findAllWebsites = () =>
    fetch(this.WEBSITE_URL)
      .then(response => response.json())

  createWebsite(website: { title: string }) {
    return fetch(this.WEBSITE_URL, {
      method: 'POST',
      body: JSON.stringify(website),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  deleteWebsite(_id: string) {
    return fetch(this.WEBSITE_URL + '/' + _id, {
      method: 'DELETE'
    })
      .then(response => response.json());
  }

  updateWebsite = (_id: string, website: any) =>
    fetch(this.WEBSITE_URL + '/' + _id, {
      method: 'PUT',
      body: JSON.stringify(website),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
}
