export const FruitSearchFruit = ({ searchFruit, handleSearchChange }) => {
  return (
    <input
      type="text"
      name="fruit"
      placeholder="Search your fruit"
      value={searchFruit}
      onChange={handleSearchChange}
      className="fruit_input"
    />
  );
};
