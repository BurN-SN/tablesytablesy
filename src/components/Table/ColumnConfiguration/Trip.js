import { QuantityInput, PriceInput, CurrencyField } from "../Formatters";

export const TRIP_COLS = [
  {
    dataField: "miles",
    text: "QTY",
    formatter: (col, row, rowI) => (
      <QuantityInput cell={col} row={row} rowIndex={rowI} fieldName={"miles"} />
    )
  },

  {
    dataField: "tripType",
    text: "TRIP TYPE"
  },

  {
    dataField: "tripRate",
    text: "RATE",
    formatter: (c, r, rI) => (
      <PriceInput cell={c} row={r} rowIndex={rI} fieldName={"tripRate"} />
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
