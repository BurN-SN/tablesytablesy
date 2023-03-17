import { useZustand } from "../../../lib/state";
import { calc } from "../Calculators";

export const OemCheckbox = ({ cell, row, rowIndex }) => {
  const { invoiceId, tableType } = row;
  const [data, updateRow] = useZustand((state) => [
    state[invoiceId][tableType].data[rowIndex].oem,
    state.updateRow
  ]);

  const handleChange = (e) => {
    const { checked } = e.target;
    const total = calc[tableType]({ ...row, oem: checked });
    updateRow(invoiceId, tableType, rowIndex, { oem: checked, total });
  };

  return <input type="checkbox" checked={data} onChange={handleChange} />;
};
