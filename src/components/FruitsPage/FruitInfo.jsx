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
      <h1>Fruit list:</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Family</th>
            <th>Genus</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => (
            <tr key={fruit.id}>
              <td>{fruit.name}</td>
              <td>{fruit.family}</td>
              <td>{fruit.genus}</td>
              <td>{fruit.order}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};