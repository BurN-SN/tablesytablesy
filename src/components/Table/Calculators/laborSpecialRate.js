import { repairCode } from "../../../lib/fakeData";

export const calculateLaborSpecialRate = (tempRow) => {
  if (tempRow.repair) {
    tempRow.repairCode = repairCode[tempRow.repair];
  }
  return tempRow;
};
