import { useMemo, useState } from "react";
import { useShowFruitData } from "./UseShowFruitData";

export const useFilterFruitData = () => {
  const { fruits } = useShowFruitData();
  const [searchFruit, setSearchFruit] = useState("");
  const [selectFamily, setSelectFamily] = useState([]);
  const [selectGenus, setSelectGenus] = useState([]);
  const [selectOrder, setSelectOrder] = useState([]);

  const filterFruits = useMemo(() => {
    const searchLower = searchFruit.trim().toLowerCase();

    return fruits.filter((fruit) => {
      const matchesSearch =
        !searchLower || fruit.name.toLowerCase().includes(searchLower);

      const matchesFamily =
        selectFamily.length === 0 || selectFamily.includes(fruit.family);

      const matchesOrder =
        selectOrder.length === 0 || selectOrder.includes(fruit.order);

      const matchesGenus =
        selectGenus.length === 0 || selectGenus.includes(fruit.genus);

      return matchesSearch && matchesFamily && matchesOrder && matchesGenus;
    });
  }, [fruits, searchFruit, selectFamily, selectOrder, selectGenus]);
  
  const handleSearchChange = (e) => {
    setSearchFruit(e.target.value);
  };

  const handleFamilyChange = (e) => {
    setSelectFamily(e ? [e] : []);
  };

  const handleGenusChange = (e) => {
    setSelectGenus(e ? [e] : []);
  };

  const handleOrderChange = (e) => {
    setSelectOrder(e ? [e] : []);
  };

  return {
    searchFruit,
    filterFruits,
    handleSearchChange,
    handleFamilyChange,
    handleGenusChange,
    handleOrderChange,
  };
};
