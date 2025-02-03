import { NewRecipeForm } from "./NewRecipeForm";

export const ShowNewRecipe = ({
  formValues,
  fruits,
  handleTyping,
  openCreate,
  setOpenCreator,
  setSelectedRecipe,
  buttonCreator,
  setButtonCreator,
  setFormValues,
}) => {
  const handleCreateNewSalad = () => {
    setFormValues({
      name: "",
      author: "",
      description: "",
      prepare: "",
      fruit1: { name: "", nutritions: {} },
      fruit2: { name: "", nutritions: {} },
      fruit3: { name: "", nutritions: {} },
      fruit4: { name: "", nutritions: {} },
    });
    setSelectedRecipe(null);
    setOpenCreator(true);
    setButtonCreator(false);
  };

  const handleCloseForm = () => {
    setOpenCreator(false);
    setButtonCreator(true);
  };

  return (
    <div className="fruitApp-container fruitApp_showNewRecipe">
      {buttonCreator && (
        <div className="showNewRecipe" onClick={handleCreateNewSalad}>
          <a className="showNewRecipe_btn">
            Create new salad
            <span className="material-symbols-outlined">add_circle</span>
          </a>
        </div>
      )}
      {openCreate && (
        <NewRecipeForm
          handleTyping={handleTyping}
          formValues={formValues}
          fruits={fruits || []}
          onCloseForm={handleCloseForm}
        />
      )}
    </div>
  );
};
