import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { addNewRow } from "../../components/Table/";

export const useZustand = create(
  immer((set, get) => ({
    tabs: [],
    activeTab: null,

    newTab: (tab) =>
      set((draft) => {
        draft.tabs.push(tab);
        draft.activeTab = tab.id;
      }),

    init: (id, payload) => {
      const exists = get()[id];
      // ensure table with ID does not already exist before creating
      if (!exists) {
        set((draft) => {
          draft[id] = payload;
        });
      }
      // else do nothing.
    },

    updateTotal: (invoiceId, tableType, rowIndex, total) => {
      set((draft) => {
        draft[invoiceId][tableType].data[rowIndex].total = total;
      });
    },

    updateRow: (invoiceId, tableType, rowIndex, newValues) => {
      console.log("NEW VALUES", newValues);
      set((draft) => {
        const record = draft[invoiceId][tableType].data[rowIndex];
        for (const key in newValues) {
          record[key] = newValues[key];
        }
      });
    },

    // IDEAL would be to avoid logic specific to one table or another inside store.
    adjustSelectRateTable: (invoiceId, tableType, rowIndex, selectedRepair) => {
      set((draft) => {
        const data = draft[invoiceId].laborSelectRate.data;

        //first, find which repairs get full and 3/4 coverage.
        const allCodes = data.map(({ repairCode }) => repairCode);
        let index100 = undefined;
        let index75 = undefined;

        allCodes.forEach((code, i, array) => {
          if (!code) return; // uncovered repairs

          if (index100 === undefined) {
            index100 = i;
            return;
          }

          if (code >= array[index100]) {
            index75 = index100;
            index100 = i;
            return;
          }

          if (code >= array[index75]) {
            index75 = i;
            return;
          }
        });

        // assign values to data
        data.forEach((row, i) => {
          const { repairRate } = row;
          let percent;

          if (!row.repairCode) {
            // no repair code, not covered, pay $0
            percent = 0;
          } else if (i === index100) {
            // top repair pays out fully
            percent = 1;
          } else if (i === index75) {
            // second biggest repair pays out 75%
            percent = 0.75;
          } else {
            // finally, all other repairs pay out half.
            percent = 0.5;
          }

          Object.assign(row, { percent, total: repairRate * percent });
        });
      });
    },

    addTableRow: (invoiceId, tableType, fetchedRowValues) => {
      set((draft) => {
        draft[invoiceId][tableType].data.push(
          addNewRow(tableType, invoiceId, { ...fetchedRowValues })
        );
      });
    },

    currentInvoice: () => {
      const currentInvoiceId = get().tabs.find((t) => t.id === get().activeTab)
        .invoiceId;
      return get()[currentInvoiceId];
    },

    getRow: (staticRow, index) => {
      const { invoiceId, tableType } = staticRow;
      return get()[invoiceId]?.[tableType]?.data?.[index];
    },

    currentTabObject: () => get().tabs.find((t) => t.id === get().activeTab)
  }))
);

/**
 * updatetab = (index, value) => {
 *  const item = state.data[index]
 *  return {
 *  ...state,
 *  tabs: [
 *    ...state.tabs
 *
 * ]
 * }
 * }
 */
