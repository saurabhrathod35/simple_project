import Column from './Column';

export default class Row {
  title: String;
  columns: Column[];
  constructor(title: String, columns: Column[]) {
    this.title = title;
    this.columns = columns;
  }
}
