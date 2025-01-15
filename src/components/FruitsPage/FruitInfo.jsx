import { useEffect } from "react";
import { useState } from "react";
import { getAllFruits } from "../../data/getAllFruits";

export const FruitInfo = () => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFruits = async () => {
      try {
        const response = await getAllFruits();
        setFruits(response);
      } catch (error) {
        console.log(error);
        setError("Ops...");
      } finally {
        setLoading(false);
      }
    };

    getFruits();
  }, []);

  if (loading) return <div>Ładowanie danych...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Lista Owoców:</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} - {fruit.family}
          </li>
        ))}
      </ul>
    </div>
  );
};
