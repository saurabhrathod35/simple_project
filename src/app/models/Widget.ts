export default class Widget {
  type: String;
  text: String;
  size: Number;
  constructor(widget?) {
    this.setwidget(widget);
  }
  
  setwidget(widget){
    if(widget){
      this.type = widget.type;
      this.text = widget.text;
      this.size = widget.size;
    }
    
  }
}
