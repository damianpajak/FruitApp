import { useMemo } from "react";
import { useShowFruitData } from "./UseShowFruitData";

export const useShowFruitFamilyData = () => {
  const { fruits } = useShowFruitData();

  const family = useMemo(() => {
    return fruits.map((e) => e.family);
  }, [fruits]);

  const fruitFamily = useMemo(() => {
    return [...new Set(family)];
  }, [family]);

  return { fruitFamily };
};
