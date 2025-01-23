export const FruitSearchOrder = ({ fruitOrder, handleOrderChange }) => {
  return (
    <label>
      <select
        name="order"
        onChange={(e) => handleOrderChange(e.target.value)}
        className="fruit_select"
      >
        <option value="">Select order</option>
        {fruitOrder.map((fruit, idx) => (
          <option key={idx} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>
    </label>
  );
};
