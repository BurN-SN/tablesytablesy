export const Currency = ({ value }) => {
  return (
    <span>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(value || 0)}
    </span>
  );
};