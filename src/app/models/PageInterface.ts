import Row from './Row';
import Column from './Column';
import Widget from './Widget';

interface PageInterface {
  appendRow();
  insertRowAfter(row: Row);
  getAllRows(): Row[];

  insertColumnAfter(row: Row, afterColumn: Column);
  deleteColumn(row: Row, column: Column);
  spanColumnUp(row: Row, column: Column);
  spanColumnDown(row: Row, column: Column);
  moveColumnLeft(row: Row, column: Column);
  moveColumnRight(row: Row, column: Column);
  moveColumnUp(row: Row, column: Column);
  moveColumnDown(row: Row, column: Column);

  appendWidget(row: Row, column: Column);
  deleteWidget(row: Row, column: Column, widget: Widget);
  moveWidgetUp(row: Row, column: Column, widget: Widget);
  moveWidgetDown(row: Row, column: Column, widget: Widget);
}

export default PageInterface;
