import { useState } from "react";
import { useZustand } from "../../../lib/state";
import styles from "./Formatters.module.scss";

export const BasicInput = ({ cell, row, rowIndex, fieldName }) => {
  const { invoiceId, tableType } = row;
  const [value, setValue] = useState(cell || "");

  const updateRow = useZustand((state) => state.updateRow);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const acceptChanges = (e) => {
    updateRow(invoiceId, tableType, rowIndex, { [fieldName]: value });
  };

  return (
    <input
      name={fieldName}
      type="text"
      value={value}
      onChange={handleInput}
      onBlur={acceptChanges}
      className={styles.tableInput}
    />
  );
};
