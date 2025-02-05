export const RecipeDetailView = ({ selectedRecipe }) => {
  if (!selectedRecipe) {
    return <div>No recipe selected</div>;
  }

  const carbohydrates = parseFloat(
    (selectedRecipe?.fruits?.fruit1?.nutritions?.carbohydrates || 0) +
      (selectedRecipe?.fruits?.fruit2?.nutritions?.carbohydrates || 0) +
      (selectedRecipe?.fruits?.fruit3?.nutritions?.carbohydrates || 0) +
      (selectedRecipe?.fruits?.fruit4?.nutritions?.carbohydrates || 0)
  );

  const protein = parseFloat(
    (selectedRecipe?.fruits?.fruit1?.nutritions?.protein || 0) +
      (selectedRecipe?.fruits?.fruit2?.nutritions?.protein || 0) +
      (selectedRecipe?.fruits?.fruit3?.nutritions?.protein || 0) +
      (selectedRecipe?.fruits?.fruit4?.nutritions?.protein || 0)
  );
  const fat = parseFloat(
    (selectedRecipe?.fruits?.fruit1?.nutritions?.fat || 0) +
      (selectedRecipe?.fruits?.fruit2?.nutritions?.fat || 0) +
      (selectedRecipe?.fruits?.fruit3?.nutritions?.fat || 0) +
      (selectedRecipe?.fruits?.fruit4?.nutritions?.fat || 0)
  );

  const calories = parseFloat(
    (selectedRecipe?.fruits?.fruit1?.nutritions?.calories || 0) +
      (selectedRecipe?.fruits?.fruit2?.nutritions?.calories || 0) +
      (selectedRecipe?.fruits?.fruit3?.nutritions?.calories || 0) +
      (selectedRecipe?.fruits?.fruit4?.nutritions?.calories || 0)
  );

  const sugar = parseFloat(
    (selectedRecipe?.fruits?.fruit1?.nutritions?.sugar || 0) +
      (selectedRecipe?.fruits?.fruit2?.nutritions?.sugar || 0) +
      (selectedRecipe?.fruits?.fruit3?.nutritions?.sugar || 0) +
      (selectedRecipe?.fruits?.fruit4?.nutritions?.sugar || 0)
  );

  return (
    <div className="fruitApp-container">
      <div className="recipeDataView">
        <p className="recipeDataView_header">Calculator:</p>
        <table className="recipeDataView_table">
          <thead>
            <tr>
              <th>Carbohydrates</th>
              <th>Protein</th>
              <th>Fat</th>
              <th>Calories</th>
              <th>Sugar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{carbohydrates.toFixed(1)}</td>
              <td>{protein.toFixed(1)}</td>
              <td>{fat.toFixed(1)}</td>
              <td>{calories.toFixed(1)}</td>
              <td>{sugar.toFixed(1)}</td>
            </tr>
          </tbody>
        </table>
        <p className="recipeDataView_header">Recipe name:</p>
        <span className="recipeDataView_data">
          {selectedRecipe?.name || "No recipe name entered"}
        </span>
        <p className="recipeDataView_header">Author&apos;s name</p>
        <span className="recipeDataView_data">
          {selectedRecipe?.author || "Recipe author name not entered"}
        </span>
        <p className="recipeDataView_header">Recipe description:</p>
        <span className="recipeDataView_textarea">
          {selectedRecipe?.description || "No recipe description entered"}
        </span>
        <p className="recipeDataView_header">Recipe preparation description:</p>
        <span className="recipeDataView_textarea">
          {selectedRecipe?.prepare ||
            "It was not written how to prepare the salad"}
        </span>
        <p className="recipeDataView_header">First fruit:</p>
        <span className="recipeDataView_data">
          {selectedRecipe?.fruits?.fruit1?.name || "No fruit selected"}
        </span>
        <p className="recipeDataView_header">Second fruit:</p>
        <span className="recipeDataView_data">
          {selectedRecipe?.fruits?.fruit2?.name || "No fruit selected"}
        </span>
        <p className="recipeDataView_header">Third fruit:</p>
        <span className="recipeDataView_data">
          {selectedRecipe?.fruits?.fruit3?.name || "No fruit selected"}
        </span>
        <p className="recipeDataView_header">Fourth fruit:</p>
        <span className="recipeDataView_data">
          {selectedRecipe?.fruits?.fruit4.name || "No fruit selected"}
        </span>
      </div>
    </div>
  );
};
