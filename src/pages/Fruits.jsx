import { FruitSearch } from "../components/FruitsPage/FruitSearch";
import { FruitTable } from "../components/FruitsPage/FruitTable";
import { useFilterFruitData } from "../customHooks/UseFilterFruitData";

export const Fruits = () => {
  const { searchFruit, filterFruits, handleSearchChange } =
    useFilterFruitData();

  return (
    <div className="fruits container">
      <h1 className="fruits_header-title">Fruit list</h1>
      <FruitSearch
        searchFruit={searchFruit}
        handleSearchChange={handleSearchChange}
      />
      <FruitTable filterFruits={filterFruits} />
    </div>
  );
};
