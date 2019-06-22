import {PageModel} from './PageModel';

export class Website {
    title: string = undefined;
    author: string = undefined;
    page: Array<PageModel> = [];
    constructor(website) {
        this.setWebsite(website);
    }

    setWebsite(website) {
        if (website) {
            this.title = website.title
            this.author = website.author
            this.page = website.page
        }
    }
}