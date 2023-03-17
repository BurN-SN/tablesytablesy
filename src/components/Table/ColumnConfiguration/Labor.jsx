import {
  QuantityInput,
  BasicInput,
  PriceInput,
  CurrencyField
} from "../Formatters";

export const LABOR_COLS = [
  {
    dataField: "asset",
    text: "ASSET",
    formatter: (col, row, rowI) => (
      <BasicInput cell={col} row={row} rowIndex={rowI} fieldName={"asset"} />
    )
  },
  {
    dataField: "component",
    text: "COMPONENT",
    formatter: (col, row, rowI) => (
      <BasicInput
        cell={col}
        row={row}
        rowIndex={rowI}
        fieldName={"component"}
      />
    )
  },
  {
    dataField: "repair",
    text: "REPAIR",
    formatter: (col, row, rowI) => (
      <BasicInput cell={col} row={row} rowIndex={rowI} fieldName={"repair"} />
    )
  },
  {
    dataField: "hours",
    text: "HOURS",
    formatter: (col, row, rowI) => (
      <QuantityInput cell={col} row={row} rowIndex={rowI} fieldName={"hours"} />
    )
  },
  {
    dataField: "rate",
    text: "RATE/HR",
    formatter: (c, r, rI) => (
      <PriceInput cell={c} row={r} rowIndex={rI} fieldName={"rate"} />
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
