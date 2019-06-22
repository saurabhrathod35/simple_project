import Widget from "../models/Widget";
import Column from "../models/Column";
import Row from '../models/Row';

const rows = function () {
  return [
    new Row("row 1",
      [
        new Column("column 1, 1", 6, [
          new Widget({ type: "HEADING", text: "Heading 1", size: 1 }),
          new Widget({ type: "PARAGRAPH", text: "Paragraph 1", size: 2 })
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
