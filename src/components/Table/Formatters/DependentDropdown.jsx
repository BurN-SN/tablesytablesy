import { useEffect } from "react";
import {
  FAKE_DATA,
  repairRates,
  repairCodes
} from "../../../lib/fakeData/fake-assets";
import { useZustand } from "../../../lib/state";
import styles from "./Formatters.module.scss";

export const DependentDropdown = ({
  cell,
  row,
  rowIndex,
  fieldName,
  dependentDropdownField
}) => {
  const { invoiceId, tableType } = row;
  const [
    selectedOption,
    fieldOptions,
    updateRow,
    adjustSelectRateTable
  ] = useZustand((state) => {
    const row = state[invoiceId][tableType].data[rowIndex];
    const selectedOption = row[fieldName];
    const fieldOptions = row[`${fieldName}Options`];

    return [
      selectedOption,
      fieldOptions,
      state.updateRow,
      state.adjustSelectRateTable
    ];
  });

  // sub to fieldOptions. if Options changes, reset selected to undefined.
  useEffect(() => {
    const isSelectedValid =
      fieldOptions?.findIndex(({ value }) => value === selectedOption) !== -1;
    if (!isSelectedValid) {
      updateRow(invoiceId, tableType, rowIndex, {
        [fieldName]: undefined
      });
    }
  }, [fieldOptions]);

  // anytime selection changes, update options for next field.
  // in case of select rate, adjust percentages on table.
  // this fires AFTER selection state change
  useEffect(() => {
    // NOT IDEAL. Woule be better to keep everything generic and avoid specific cases,
    // especially inside formatter components and inside tables.
    if (
      tableType === "laborSelectRate" &&
      fieldName === "repair" &&
      selectedOption
    ) {
      adjustSelectRateTable(invoiceId);
      return;
    }

    if (dependentDropdownField) {
      // fetch options for next field and update row.
      const optionsKey = `${dependentDropdownField}Options`;
      const nextOptions = FAKE_DATA[dependentDropdownField][selectedOption];
      updateRow(invoiceId, tableType, rowIndex, {
        [optionsKey]: nextOptions
      });
    }
  }, [selectedOption]);

  const handleSelection = (e) => {
    const { value } = e.target;

    // NOT IDEAL. Woule be better to keep everything generic and avoid specific cases,
    // especially inside formatter components and inside tables.
    if (tableType === "laborSelectRate" && fieldName === "repair") {
      // IF selectRate table AND on the repair selection step, fill the rest
      const repair = value;
      const repairCode = repairCodes[repair];
      const repairRate = repairRates[repairCode];
      updateRow(invoiceId, tableType, rowIndex, {
        repair,
        repairCode,
        repairRate: repairRate ?? 0
      });
    } else {
      updateRow(invoiceId, tableType, rowIndex, { [fieldName]: value });
    }
  };

  return (
    <select
      className={styles.tableInput}
      placeholder="Select..."
      onChange={handleSelection}
      value={selectedOption}
    >
      <option value="" disabled selected>
        Select...
      </option>
      {fieldOptions?.map((o, i) => (
        <option key={`${o.value}-${i}`} value={o.value}>
          {o.display}
        </option>
      ))}
    </select>
  );
};
