import { useMemo } from "react";
import { useShowFruitData } from "./UseShowFruitData";

export const useShowFruitGenusData = () => {
  const { fruits } = useShowFruitData();

  const genus = useMemo(() => {
    return fruits.map((e) => e.genus);
  }, [fruits]);

  const fruitGenus = useMemo(() => {
    return [...new Set(genus)];
  }, [genus]);

  return { fruitGenus };
};
