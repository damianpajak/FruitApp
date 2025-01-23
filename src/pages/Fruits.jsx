import { FruitSearch } from "../components/FruitsPage/FruitSearch";
import { FruitTable } from "../components/FruitsPage/FruitTable";
import { useFilterFruitData } from "../customHooks/UseFilterFruitData";
import { useShowFruitFamilyData } from "../customHooks/UseShowFruitFamilyData";
import { useShowFruitGenusData } from "../customHooks/UseShowFruitGenusData";
import { useShowFruitOrderData } from "../customHooks/UseShowFruitOrderData";

export const Fruits = () => {
  const {
    searchFruit,
    filterFruits,
    handleSearchChange,
    handleFamilyChange,
    handleGenusChange,
    handleOrderChange,
  } = useFilterFruitData();
  const { fruitFamily } = useShowFruitFamilyData();
  const { fruitOrder } = useShowFruitOrderData();
  const { fruitGenus } = useShowFruitGenusData();

  return (
    <div className="fruits container">
      <h1 className="fruits_header-title">Fruit list</h1>
      <FruitSearch
        searchFruit={searchFruit}
        handleSearchChange={handleSearchChange}
        fruitFamily={fruitFamily}
        handleFamilyChange={handleFamilyChange}
        fruitGenus={fruitGenus}
        handleGenusChange={handleGenusChange}
        fruitOrder={fruitOrder}
        handleOrderChange={handleOrderChange}
      />
      <FruitTable filterFruits={filterFruits} />
    </div>
  );
};
