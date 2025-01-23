import { FruitSearchFamily } from "./FruitSearchFamily";
import { FruitSearchFruit } from "./FruitSearchFruit";
import { FruitSearchGenus } from "./FruitSearchGenus";
import { FruitSearchOrder } from "./FruitSearchOrder";

export const FruitSearch = ({
  searchFruit,
  handleSearchChange,
  fruitFamily,
  handleFamilyChange,
  fruitGenus,
  handleGenusChange,
  fruitOrder,
  handleOrderChange,
}) => {
  return (
    <form>
      <FruitSearchFruit
        searchFruit={searchFruit}
        handleSearchChange={handleSearchChange}
      />
      <FruitSearchFamily
        fruitFamily={fruitFamily}
        handleFamilyChange={handleFamilyChange}
      />
      <FruitSearchGenus
        fruitGenus={fruitGenus}
        handleGenusChange={handleGenusChange}
      />
      <FruitSearchOrder
        fruitOrder={fruitOrder}
        handleOrderChange={handleOrderChange}
      />
    </form>
  );
};
