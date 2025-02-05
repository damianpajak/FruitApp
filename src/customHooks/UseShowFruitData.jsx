import { useState, useEffect } from "react";
import { getAllFruits } from "../data/getAllFruits";

export const useShowFruitData = () => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFruits = async () => {
      try {
        const response = await getAllFruits();
        setFruits(Array.isArray(response) ? response : []); 
      } catch (error) {
        console.log(error);
        setError("Ops...");
      } finally {
        setLoading(false);
      }
    };

    getFruits();
  }, []);

  return { fruits, loading, error };
};
