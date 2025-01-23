import { useMemo } from "react";
import { useShowFruitData } from "./UseShowFruitData";

export const useShowFruitOrderData = () => {
  const { fruits } = useShowFruitData();

  const order = useMemo(() => {
    return fruits.map((e) => e.order);
  }, [fruits]);

  const fruitOrder = useMemo(() => {
    return [...new Set(order)];
  }, [order]);

  return { fruitOrder };
};
