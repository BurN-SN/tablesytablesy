import { useEffect, useState } from "react";
import { COLUMNS, columnsByTable, contractTypes } from "../../components/Table";
import { fetchAssets } from "../api";

export const useConfigureTable = (value) => {
  const [prepared, setPrepared] = useState(null);
  useEffect(() => {
    if (!value) {
      setPrepared(null);
      return;
    }
    const result = {};
    contractTypes[value].forEach((table) => {
      const newTable = {};

      // IF TABLETYPE NEEDS ASSETS:
      if (columnsByTable[table].includes("asset")) {
        // FETCH COLUMNS AND SET THEM TO ASSETOPTIONS ON TABLE
        const options = fetchAssets();
        newTable.assetOptions = options ?? [];
      }

      // DO THE SAME FOR ANTHING ELSE THAT BELONGS ON THE TABLE LEVEL.

      newTable.tableType = table;
      newTable.columns = COLUMNS[table];
      newTable.data = [];

      result[table] = newTable;
    });
    setPrepared(result);
  }, [value]);

  return prepared;
};
/**
 *
 */
