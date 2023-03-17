import styles from "./Modal.module.scss";
import { getNextTabId, randomized, useZustand } from "../../lib/state";
import { useState } from "react";
import { useConfigureTable } from "../../lib/hooks/useConfigureTable";

const display = {
  labor: "Labor Only",
  labor_Markup: "Labor With Markup",
  laborParts_Markup: "Parts & Labor w/ Markup",
  laborParts_SelectRate: "Select Rate",
  parts: "Parts Only",
  laborParts: "Parts & Labor",
  labor_Plus: "Labor Plus",
  laborParts_Plus: "Parts and Labor Plus"
  // partsOnlyLennox: "Parts Only (Lennox)",
  // laborMarkupLennox: "Labor Markup (Lennox)",
  // commercialPartsLaborMarkup: "Parts & Labor w/ Markup - Commercial",
  // commercialLaborMarkup: "Labor w/ Markup - Commercial"
};

export const AddModal = ({ isOpen, onClose }) => {
  const [newTab, init] = useZustand((state) => [state.newTab, state.init]);
  const [value, setValue] = useState("laborParts_SelectRate");
  const tableConfig = useConfigureTable(value);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("submitting", value);
    const id = getNextTabId();
    const invoiceId = randomized();
    newTab({
      id,
      invoiceId,
      tableConfigType: value
    });
    init(invoiceId, tableConfig);
    onClose();
  };

  return (
    <aside className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Select a table configuration</h2>
        <select onChange={handleChange} value={value}>
          {Object.entries(display).map(([key, display]) => (
            <option key={key} value={key}>
              {display}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>OK</button>
        <div></div>
      </div>
    </aside>
  );
};
