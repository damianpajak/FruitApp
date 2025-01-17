import { useMemo, useState } from "react";
import { useShowFruitData } from "./UseShowFruitData";

export const useFilterFruitData = () => {
  const { fruits } = useShowFruitData();
  const [searchFruit, setSearchFruit] = useState("");

  const filterFruits = useMemo(() => {
    return fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(searchFruit.toLowerCase())
    );
  }, [fruits, searchFruit]);

  const handleSearchChange = (e) => {
    setSearchFruit(e.target.value);
  };

  return { searchFruit, filterFruits, handleSearchChange };
};
