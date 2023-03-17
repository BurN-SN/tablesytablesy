import { useZustand } from "../../../lib/state";
import { Currency } from "../../Shared/Currency";

export const CurrencyField = ({ row, rowIndex, fieldName }) => {
  const data = useZustand()[row.invoiceId][row.tableType].data[rowIndex][
    fieldName
  ];

  // console.log("data", data);
  return <Currency value={data} />;
};
