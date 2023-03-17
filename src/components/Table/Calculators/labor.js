export const calculateLabor = (tempRow) => {
  const { hours: hrs, rate: r } = tempRow;
  const hours = hrs ?? 0;
  const hourlyRate = r ?? 0;

  return hours * hourlyRate;
};
