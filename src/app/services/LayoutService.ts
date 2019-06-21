import {Injectable} from '@angular/core';

@Injectable()
export default class LayoutService {

  FIND_ALL_PAGES = 'http://localhost:3000/api/pages';
  WIDGETS = 'http://localhost:3000/api/widgets';

  appendWidget = widget =>
    fetch(this.WIDGETS)

  findAllPages = () =>
    fetch(this.FIND_ALL_PAGES)
      .then(response => response.json())

  findPageById = pid =>
    fetch(this.FIND_ALL_PAGES + `/${pid}`)
      .then(response => response.json())

  findWidgetById = wid =>
    fetch(this.WIDGETS + `/${wid}`)
      .then(response => response.json())
}
