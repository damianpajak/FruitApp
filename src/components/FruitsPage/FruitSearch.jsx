export const FruitSearch = ({ searchFruit, handleSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search your fruit"
        value={searchFruit}
        onChange={handleSearchChange}
      />
    </div>
  );
};
