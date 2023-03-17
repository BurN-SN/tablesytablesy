import BootstrapTable from "react-bootstrap-table-next";
import { currentTab, useZustand } from "../../lib/state";
import styles from "./Table.module.scss";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { AddRowButton } from "./AddRowButton";
import { Currency } from "../Shared";

export const TableController = () => {
  const { invoiceId } = currentTab();

  const currentInvoice = useZustand((state) => state.currentInvoice());

  const invoiceTotal = Object.values(currentInvoice)
    .map((table) => table.data)
    .flat()
    .reduce((acc, val) => {
      return acc + val.total;
    }, 0);

  return (
    <>
      {Object.entries(currentInvoice)?.map((e) => {
        return <TableComponent invoiceId={invoiceId} tableType={e[0]} />;
      })}
      <h2 style={{ textAlign: "right" }}>
        Grand Total:&nbsp;
        <Currency value={invoiceTotal} />
      </h2>
    </>
  );
};

// Wrapping each table in its own component allows us to access state
// for JUST that table specifically, while performing the map in the parent.
const TableComponent = ({ invoiceId, tableType }) => {
  const { columns, data } = useZustand((state) => {
    return state.currentInvoice()[tableType];
  });

  const total = data.reduce((acc, lineItem) => acc + lineItem.total, 0);

  return (
    <div className={styles.tableWrapper}>
      <BootstrapTable
        key={`${invoiceId}_${tableType}`}
        classes={styles.w100}
        columns={columns}
        data={data}
        keyField={"total"}
        striped
        caption={
          <span
            style={{
              fontSize: 10,
              lineHeight: 1.2
            }}
          >
            {tableType}
          </span>
        }
      />
      {/* THE FOLLOWING WOULD BE THE FOOTER OF THE TABLE */}
      <div className={styles.footerRow}>
        <AddRowButton tableType={tableType} invoiceId={invoiceId} />
        {/* <button className={styles.addRowBtn}>+ ROW</button> */}
        <p>
          <span>
            <b>Table Total:</b>
            &nbsp;
            <Currency value={total} />
          </span>
        </p>
      </div>
    </div>
  );
};

/**
 * Main takeaways
 *
 * - Everything is driven by configuration type
 * - Zustand allows state management without provider
 * - Zustand allows hook-based state
 * - Immer
 */
