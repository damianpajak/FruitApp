import { useEffect, useState } from "react";
import { getRecipes } from "../../data/getRecipes";
import { ButtonRecipe } from "./ButtonRecipe";
import { deleteRecipes } from "../../data/deleteRecipe";

export const ShowRecipe = ({ onSelectRecipe }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    const success = await deleteRecipes(id);

    if (success) {
      window.location.reload();
    }
  };

  return (
    <div className="fruitApp-container">
      <p className="recipeBox-header">Salad Recipe List</p>
      <ul className="recipeList">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className="recipeList_element"
            onClick={() => onSelectRecipe(recipe)}
          >
            {recipe.name}
            <ButtonRecipe
              title="Delete"
              onClick={() => handleDelete(recipe.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
