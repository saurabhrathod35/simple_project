export default class Widget {
  type: String;
  text: String;
  size: Number;
  constructor(type: String = 'HEADING', text: String = 'New Widget !!!', size: Number = 1) {
    this.type = type;
    this.text = text;
    this.size = size;
  }
}
