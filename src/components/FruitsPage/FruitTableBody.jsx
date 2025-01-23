import { useState } from "react";

export const FruitTableBody = ({ filterFruits }) => {
  const [hoverRow, setHoverRow] = useState(null);

  const handleMouseEnter = (id) => {
    setHoverRow(id);
  };

  const handleMouseLeave = () => {
    setHoverRow(null);
  };

  return (
    <tbody>
      {filterFruits.map((fruit) => (
        <tr
          onMouseEnter={() => handleMouseEnter(fruit.id)}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor: hoverRow === fruit.id ? "#fcf9c6" : null,
            color: hoverRow === fruit.id ? "#9eb23b" : null,
          }}
          key={fruit.id}
        >
          <td className="fruit_table-cell">{fruit.name}</td>
          <td className="fruit_table-cell">{fruit.family}</td>
          <td className="fruit_table-cell">{fruit.genus}</td>
          <td className="fruit_table-cell">{fruit.order}</td>
        </tr>
      ))}
    </tbody>
  );
};
