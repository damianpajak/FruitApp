export const FruitSearchGenus = ({ fruitGenus, handleGenusChange }) => {
  return (
    <label>
      <select
        name="genus"
        onChange={(e) => handleGenusChange(e.target.value)}
        className="fruit_select"
      >
        <option value="">Select genus</option>
        {fruitGenus.map((fruit, idx) => (
          <option key={idx} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>
    </label>
  );
};
