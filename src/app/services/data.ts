import Widget from "../models/Widget";
import Column from "../models/Column";
import Row from '../models/Row';

const rows = function () {
  return [
    new Row("row 1",
    [
      new Column("column 1, 1", 6, [
          new Widget("HEADING", "Heading 1", 1),
          new Widget("PARAGRAPH", "Paragraph 1", 2)
        ]
      ),
      new Column("column 1, 2", 6, [])
    ]),
  new Row("row 2",
      [
        new Column("column 2, 1", 6, []),
        new Column("column 2, 2", 6, [])
      ]
    )
  ]
}

export default rows;
