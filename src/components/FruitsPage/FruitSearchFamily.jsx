export const FruitSearchFamily = ({ fruitFamily, handleFamilyChange }) => {
  return (
    <label>
      <select
        name="family"
        onChange={(e) => handleFamilyChange(e.target.value)}
        className="fruit_select"
      >
        <option value="">Select family</option>
        {fruitFamily.map((fruit, idx) => (
          <option key={idx} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>
    </label>
  );
};
