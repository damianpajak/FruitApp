import { FruitTableHeader } from "./FruitTableHeader";
import { FruitTableBody } from "./FruitTableBody";

export const FruitTable = ({ filterFruits }) => {
  return (
    <div>
      <table className="fruits_table">
        <FruitTableHeader />
        <FruitTableBody filterFruits={filterFruits} />
      </table>
    </div>
  );
};
