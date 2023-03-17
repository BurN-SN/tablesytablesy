import { useState } from "react";
import { useZustand } from "../../../lib/state";
import Cleave from "cleave.js/react";

import styles from "./Formatters.module.scss";
import { calc } from "../Calculators";

export const PriceInput = ({ cell, row, rowIndex, fieldName }) => {
  const [value, setValue] = useState(cell || "0.00");

  const { tableType, invoiceId } = row;

  const updateRow = useZustand((state) => state.updateRow);

  const acceptChanges = (e) => {
    const { rawValue } = e.target;
    const num = Number(rawValue).toFixed(2);
    console.log("price input", {
      cell,
      row,
      rowIndex,
      fieldName,
      rawValue,
      num
    });

    const total = calc[tableType]({ ...row, [fieldName]: num });
    updateRow(invoiceId, tableType, rowIndex, { [fieldName]: num, total });
  };

  const handleInputChange = (e) => {
    const { rawValue: v } = e.target;
    console.log("v", v);
    const parsed = v === "" ? 0 : v;
    setValue(parsed);
  };

  // console.log({ value });
  return (
    <Cleave
      name={fieldName}
      value={Number(value).toFixed(2) || 0}
      onChange={handleInputChange}
      onBlur={acceptChanges}
      className={styles.tableInput}
      options={{
        prefix: "$",
        numeralDecimalMark: ".",
        numeralDecimalScale: 2,
        numeral: true,
        rawValueTrimPrefix: true
      }}
    />
  );
};
