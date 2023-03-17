import {
  BasicInput,
  OemCheckbox,
  PriceInput,
  QuantityInput,
  Total
} from "../Formatters";

export const PARTS_MARKUP_COLS = [
  {
    dataField: "qty",
    text: "QTY"
  },
  {
    dataField: "oem",
    text: "OEM"
  },
  {
    dataField: "asset",
    text: "ASSET"
  },
  {
    dataField: "partNumber",
    text: "PART #"
  },
  {
    dataField: "description",
    text: "DESC"
  },

  {
    dataField: "unitPrice",
    text: "PRICE"
  },
  {
    dataField: "markup",
    text: "Markup"
  },
  {
    dataField: "total",
    text: "TOTAL"
  }
];
