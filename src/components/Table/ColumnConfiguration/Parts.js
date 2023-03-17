import {
  BasicInput,
  OemCheckbox,
  PriceInput,
  QuantityInput,
  CurrencyField
} from "../Formatters";

export const PARTS_COLS = [
  {
    dataField: "qty",
    text: "QTY",
    formatter: (col, row, rowI) => (
      <QuantityInput cell={col} row={row} rowIndex={rowI} fieldName={"qty"} />
    )
  },
  {
    dataField: "oem",
    text: "OEM",
    formatter: (col, row, rowI) => (
      <OemCheckbox row={row} rowIndex={rowI} fieldName={"oem"} />
    )
  },
  {
    dataField: "asset",
    text: "ASSET",
    // formatter
    formatter: (col, row, rowI) => (
      <BasicInput cell={col} row={row} rowIndex={rowI} fieldName={"asset"} />
    )
  },
  {
    dataField: "partNumber",
    text: "PART #",
    formatter: (col, row, rowI) => (
      <BasicInput
        cell={col}
        row={row}
        rowIndex={rowI}
        fieldName={"partNumber"}
      />
    )
  },
  {
    dataField: "description",
    text: "DESC",
    formatter: (col, row, rowI) => (
      <BasicInput
        cell={col}
        row={row}
        rowIndex={rowI}
        fieldName={"description"}
      />
    )
  },

  {
    dataField: "price",
    text: "PRICE",
    formatter: (c, r, rI) => (
      <PriceInput cell={c} row={r} rowIndex={rI} fieldName={"price"} />
    )
  },
  {
    dataField: "total",
    text: "TOTAL",
    formatter: (col, row, i) => (
      <CurrencyField col={col} row={row} rowIndex={i} fieldName="total" />
    )
  }
];
