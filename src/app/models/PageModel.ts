import { Injectable } from '@angular/core';
import rows from '../services/data';
import Column from './Column';
import Row from './Row';
import Widget from './Widget';
import PageInterface from './PageInterface';
@Injectable()
export default class PageModel
  implements PageInterface {
  rows = rows();

  getAllRows() {
    return this.rows;
  }
  appendRow() {
    this.rows.push(
      new Row(
        'qwe',
        [
          new Column('column 2, 1', 1, []),
          new Column('column 2, 2', 1, [])
        ]
      ));
  }
  insertRowAfter(row) {
    const rowIndex = this.rows.indexOf(row);
    this.rows.splice(
      rowIndex + 1,
      0,
      new Row(
        'new row',
        [
          new Column('new column', 1, [])
        ]
      ));
  }
  insertColumnAfter(row, afterColumn) {
    const colIndex = row.columns.indexOf(afterColumn);
    row.columns.splice(
      colIndex + 1,
      0,
      new Column('new column', 1));
  }
  deleteColumn(row, column) {
    const colIndex = row.columns.indexOf(column);
    row.columns.splice(colIndex, 1);
  }
  spanColumnUp(row: any, col: any) {
    if (col.span < 12) {
      col.span++;
    }
  }
  spanColumnDown(row: any, col: any) {
    if (col.span > 1) {
      col.span--;
    }
  }

  moveColumnLeft(row: any, col: any) {
    const colIndex = row.columns.indexOf(col);
    if (colIndex > 0) {
      row.columns.splice(
        colIndex - 1,
        0,
        row.columns.splice(
          colIndex,
          1)[0]);
    }
  }

  moveColumnRight(row: any, col: any) {
    const colIndex = row.columns.indexOf(col);
    if (colIndex < 12) {
      row.columns.splice(
        colIndex + 1,
        0,
        row.columns.splice(
          colIndex,
          1)[0]);
    }
  }

  moveColumnUp(row: any, col: any) {
    const rowIndex = this.rows.indexOf(row);
    if (rowIndex > 0) {
      const colIndex = this.rows[rowIndex].columns.indexOf(col);
      this.rows[rowIndex - 1].columns.splice(0, 0,
        this.rows[rowIndex].columns.splice(colIndex, 1)[0]
      );
    }
  }

  moveColumnDown(row: any, col: any) {
    const rowIndex = this.rows.indexOf(row);
    if (rowIndex < this.rows.length) {
      const colIndex = this.rows[rowIndex].columns.indexOf(col);
      this.rows[rowIndex + 1].columns.splice(0, 0,
        this.rows[rowIndex].columns.splice(colIndex, 1)[0]
      );
    }
  }

  deleteWidget(row: any, col: any, widget: any) {
    const widgetIndex = col.widgets.indexOf(widget);
    col.widgets.splice(widgetIndex, 1);
  }

  appendWidget(row: any, col: any) {
    col.widgets.push(
      new Widget('HEADING', 'New Widget', 4));
  }

  moveWidgetUp(row: any, col: any, widget: any) {
    const widgetIndex = col.widgets.indexOf(widget);
    if (widgetIndex > 0) {
      col.splice(widgetIndex - 1, 0,
        col.splice(widgetIndex, 1)[0]);
    }
  }

  moveWidgetDown(row: any, col: any, widget: any) {
    const widgetIndex = col.widgets.indexOf(widget);
    if (widgetIndex < col.widgets.length - 1) {
      col.splice(widgetIndex + 1, 0,
        col.splice(widgetIndex, 1)[0]);
    }
  }
}
