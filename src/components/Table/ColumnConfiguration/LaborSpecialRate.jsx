import { CurrencyField, AssetDropdown, DependentDropdown } from "../Formatters";

export const LABOR_SPECIAL_RATE_COLS = [
  {
    dataField: "asset",
    text: "Asset",
    formatter: (col, row, rowI) => (
      <AssetDropdown
        // cell={col}
        row={row}
        rowIndex={rowI}
        fieldName={"asset"}
        dependentDropdownField={"component"}
      />
    )
  },
  {
    dataField: "component",
    text: "Component",
    formatter: (col, row, rowI) => (
      <DependentDropdown
        // cell={col}
        row={row}
        rowIndex={rowI}
        fieldName={"component"}
        dependentDropdownField={"repair"}
      />
    )
  },
  {
    dataField: "repair",
    text: "Repair",
    formatter: (col, row, rowI) => (
      <DependentDropdown
        cell={col}
        row={row}
        rowIndex={rowI}
        fieldName={"repair"}
      />
    )
  },
  {
    dataField: "repairCode",
    text: "RepCode"
    // DROPDOWN
  },
  {
    dataField: "percent",
    text: "PCT %",
    formatter: (col) => `${col * 100 || 0}%`
    // formatter: (col) => col
  },
  {
    dataField: "repairRate",
    text: "RepRate",
    formatter: (c, r, rI) => (
      <CurrencyField cell={c} row={r} rowIndex={rI} fieldName={"repairRate"} />
    )
  },
  {
    dataField: "total",
    text: "TOTAL",
    formatter: (col, row, i) => (
      <CurrencyField col={col} row={row} rowIndex={i} fieldName={"total"} />
    )
  }
];
