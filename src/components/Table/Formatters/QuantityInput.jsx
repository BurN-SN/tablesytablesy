import { useState } from "react";
import { useZustand } from "../../../lib/state";
import Cleave from "cleave.js/react";

import styles from "./Formatters.module.scss";
import { calc } from "../Calculators";

export const QuantityInput = ({ cell, row, rowIndex, fieldName }) => {
  const [value, setValue] = useState(cell || 0);

  const { tableType, invoiceId } = row;

  const updateRow = useZustand((state) => state.updateRow);

  const acceptChanges = (e) => {
    const { value } = e.target;
    const num = Number(value).toFixed(0);

    const total = calc[tableType]({ ...row, [fieldName]: num });
    // const total = updateQuantity(num);
    updateRow(invoiceId, tableType, rowIndex, { [fieldName]: num, total });
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(Number(value).toFixed(0));
  };

  return (
    <Cleave
      name={fieldName}
      className={styles.tableInput}
      value={value}
      onChange={handleInputChange}
      onBlur={acceptChanges}
      options={{
        numeral: true
      }}
    />
  );
};
