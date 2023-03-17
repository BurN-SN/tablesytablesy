export const calculateParts = (tempRow) => {
  const { qty: q, price: p, oem, markup } = tempRow;
  const qty = q ?? 0;
  const price = p ?? 0;

  const preTotal = qty * price;

  if (oem) return 0;
  if (markup) return preTotal / markup;

  return preTotal;
};
