import { calculateLabor } from "./labor";
import { calculateParts } from "./parts";
import { calculateLaborSpecialRate } from "./laborSpecialRate";
import { calculateTrip } from "./trip";

export const calc = {
  labor: calculateLabor,
  parts: calculateParts,
  laborSpecialRate: calculateLaborSpecialRate,
  trip: calculateTrip
};
