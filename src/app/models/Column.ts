import Widget from './Widget';

export default class Column {
  title: String;
  span: Number;
  widgets: Widget[];

  constructor(title: String = 'New Column', span: Number = 2, widgets: Widget[] = []) {
    this.title = title;
    this.span = span;
    this.widgets = widgets;
  }

}
