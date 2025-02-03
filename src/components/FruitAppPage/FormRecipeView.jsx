export const FormRecipeView = ({ formValues }) => {
  const carbohydrates = parseFloat(
    (formValues.fruit1?.nutritions?.carbohydrates || 0) +
      (formValues.fruit2?.nutritions?.carbohydrates || 0) +
      (formValues.fruit3?.nutritions?.carbohydrates || 0) +
      (formValues.fruit4?.nutritions?.carbohydrates || 0)
  );

  const protein = parseFloat(
    (formValues.fruit1?.nutritions?.protein || 0) +
      (formValues.fruit2?.nutritions?.protein || 0) +
      (formValues.fruit3?.nutritions?.protein || 0) +
      (formValues.fruit4?.nutritions?.protein || 0)
  );
  const fat = parseFloat(
    (formValues.fruit1?.nutritions?.fat || 0) +
      (formValues.fruit2?.nutritions?.fat || 0) +
      (formValues.fruit3?.nutritions?.fat || 0) +
      (formValues.fruit4?.nutritions?.fat || 0)
  );

  const calories = parseFloat(
    (formValues.fruit1?.nutritions?.calories || 0) +
      (formValues.fruit2?.nutritions?.calories || 0) +
      (formValues.fruit3?.nutritions?.calories || 0) +
      (formValues.fruit4?.nutritions?.calories || 0)
  );

  const sugar = parseFloat(
    (formValues.fruit1?.nutritions?.sugar || 0) +
      (formValues.fruit2?.nutritions?.sugar || 0) +
      (formValues.fruit3?.nutritions?.sugar || 0) +
      (formValues.fruit4?.nutritions?.sugar || 0)
  );

  return (
    <div className="fruitApp-container">
      <div className="recipeDataView">
        <p className="recipeDataView_header">Calculator:</p>
        <table className="recipeDataView_table">
          <tr>
            <th>Carbohydrates</th>
            <th>Protein</th>
            <th>Fat</th>
            <th>Calories</th>
            <th>Sugar</th>
          </tr>
          <tr>
            <td>{carbohydrates.toFixed(1)}</td>
            <td>{protein.toFixed(1)}</td>
            <td>{fat.toFixed(1)}</td>
            <td>{calories.toFixed(1)}</td>
            <td>{sugar.toFixed(1)}</td>
          </tr>
        </table>
        <p className="recipeDataView_header">Recipe name:</p>
        <span className="recipeDataView_data">
          {formValues.name || "No recipe name entered"}
        </span>
        <p className="recipeDataView_header">Author&apos;s name: </p>
        <span className="recipeDataView_data">
          {formValues.author || "Recipe author name not entered"}
        </span>
        <p className="recipeDataView_header">Recipe description:</p>
        <span className="recipeDataView_textarea">
          {formValues.description || "No recipe description entered"}
        </span>
        <p className="recipeDataView_header">Recipe preparation description:</p>
        <span className="recipeDataView_textarea">
          {formValues.prepare || "It was not written how to prepare the salad"}
        </span>
        <p className="recipeDataView_header">First fruit:</p>
        <span className="recipeDataView_data">
          {formValues.fruit1?.name || "No fruit selected"} (100g per fruit)
        </span>
        <p className="recipeDataView_header">Second fruit:</p>
        <span className="recipeDataView_data">
          {formValues.fruit2?.name || "No fruit selected"} (100g per fruit)
        </span>
        <p className="recipeDataView_header">Third fruit:</p>
        <span className="recipeDataView_data">
          {formValues.fruit3?.name || "No fruit selected"} (100g per fruit)
        </span>
        <p className="recipeDataView_header">Fourth fruit:</p>
        <span className="recipeDataView_data">
          {formValues.fruit4.name || "No fruit selected"} (100g per fruit)
        </span>
      </div>
    </div>
  );
};
