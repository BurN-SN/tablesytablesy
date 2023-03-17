export const calculateTrip = (tempRow) => {
  const { miles: m, tripRate: rate } = tempRow;
  const miles = m ?? 0;
  const tripRate = rate ?? 0;

  return miles * tripRate;
};
