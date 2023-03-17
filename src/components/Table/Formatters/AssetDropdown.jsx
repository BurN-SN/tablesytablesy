import { useEffect } from "react";
import { FAKE_DATA } from "../../../lib/fakeData/fake-assets";
import { useZustand } from "../../../lib/state";
import styles from "./Formatters.module.scss";

/**
 * Asset dropdown is unique because ASSET options are at the table level and
 * don't require an extra API call.
 * Could potentially be brought into a single component with DependentDropdown.
 */

export const AssetDropdown = ({
  cell,
  row,
  rowIndex,
  fieldName,
  dependentDropdownField
}) => {
  const { invoiceId, tableType } = row;
  const [asset, assetOptions, updateRow] = useZustand((state) => {
    const table = state[invoiceId][tableType];
    const selectedAsset = table.data[rowIndex].asset;
    const assetOptions = table.assetOptions;

    return [selectedAsset, assetOptions, state.updateRow];
  });

  useEffect(() => {
    if (dependentDropdownField) {
      // fetch options for next field and update row.
      const optionsKey = `${dependentDropdownField}Options`;
      const nextOptions = FAKE_DATA[dependentDropdownField][asset];
      updateRow(invoiceId, tableType, rowIndex, {
        [optionsKey]: nextOptions
      });
    }
  }, [asset]);

  const handleSelection = (e) => {
    updateRow(invoiceId, tableType, rowIndex, { asset: e.target.value });
  };

  return (
    <select
      className={styles.tableInput}
      placeholder="Select..."
      onChange={handleSelection}
      value={asset}
    >
      <option value="" disabled selected>
        Select...
      </option>
      {assetOptions?.map((o, i) => (
        <option key={`${o.value}-${i}`} value={o.value}>
          {o.display}
        </option>
      ))}
    </select>
  );
};
