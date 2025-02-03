import { FormRecipeView } from "./FormRecipeView";
import { RecipeDetailView } from "./RecipeDetailView";

export const ShowSelectedFruitsCalc = ({
  formValues,
  selectedRecipe,
  openCreate,
}) => {
  if (openCreate) {
    return <FormRecipeView formValues={formValues} />;
  }

  if (selectedRecipe) {
    return <RecipeDetailView selectedRecipe={selectedRecipe} />;
  }

  return (
    <div className="fruitApp-container">
      <div className="fruitApp_viewBasic">
        <p className="fruitApp_viewBasicText">CHOOSE RECIPE</p>
        <p className="fruitApp_viewBasicText">OR</p>
        <p className="fruitApp_viewBasicText">
          START A NEW RECIPE TO SEE DETAILS
        </p>
      </div>
    </div>
  );
};
