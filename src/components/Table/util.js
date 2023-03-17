// IMPORTING COLUMN SETS TO BE CONSUMED BY BOOTSTRAP TABLE
import {
  LABOR_COLS,
  LABOR_SPECIAL_RATE_COLS,
  PARTS_COLS,
  PARTS_MARKUP_COLS,
  PARTS_ALLOWANCE_COLS,
  TRIP_COLS
} from "./ColumnConfiguration";

// EVERY CONTRACT OR CLAIM TYPE OR {{WHATEVER}} WILL HAVE A CONFIG TYPE.
// THESE ARE THE TYPES OF TABLES THAT APPEAR ON EACH CONFIG TYPE.
export const contractTypes = {
  labor: ["labor", "trip"],
  labor_Markup: ["labor", "partsMarkup", "trip"],
  laborParts_Markup: ["labor", "partsMarkup", "trip"],
  laborParts_SelectRate: ["laborSelectRate", "parts", "trip"],
  parts: ["parts"],
  laborParts: ["labor", "parts", "trip"],
  labor_Plus: ["labor", "partsAllowance", "trip"],
  laborParts_Plus: ["labor", "parts", "partsAllowance", "trip"]
};

// WHEN CONFIGURING NEW TABLE, THE TABLE TYPE COMES TO THIS AND GETS THE
// PRE-DEFINED COLUMNS FOR BOOTSTRAP TABLE TO USE.
export const COLUMNS = {
  labor: LABOR_COLS,
  laborSelectRate: LABOR_SPECIAL_RATE_COLS,
  parts: PARTS_COLS,
  trip: TRIP_COLS,
  partsMarkup: PARTS_MARKUP_COLS,
  partsAllowance: PARTS_ALLOWANCE_COLS
};

// CURRENTLY USED WITH addNewRow BELOW. THIS IS BASICALLY A WAY TO CREATE A
// NEW RECORD OR "ROW" IN A TABLE. THE VALUE IN EACH ARRAY ARE THE KEYS THAT
// WILL CREATE EVERY NEW ROW ON THAT TYPE OF TABLE.
export const columnsByTable = {
  labor: ["asset", "component", "repair", "hours", "rate", "total"],
  laborSelectRate: [
    "asset",
    "component",
    "repair",
    "repairCode",
    "percentage",
    "rate",
    "total"
  ],
  partsMarkup: [
    "qty",
    "oem",
    "asset",
    "partNumber",
    "description",
    "price",
    "markup",
    "total"
  ],
  parts: ["qty", "oem", "asset", "partNumber", "description", "price", "total"],
  trip: ["miles", "tripType", "tripRate", "total"]
};

// WIREUP LOGIC WILL GO HERE WHEN CREATING A NEW ROW. WE WILL TRY TO DO AS MANY API
// CALLS AS POSSIBLE AT THE MOUNT LEVEL. ADJUSTMENTS HERE ARE BASICALLY TO SET THE
// 'DEFAULT' VALUES ON A NEWLY CREATED ROW.
export const addNewRow = (tableType, invoiceId) => {
  const result = { tableType, invoiceId };
  // const newPartsRow = new PartsRow(invoiceId);
  columnsByTable[tableType].forEach((field) => {
    result[field] = null;
  });
  result.total = 0;
  return result;
  // return tableType === "parts" ? newPartsRow : result;
};
