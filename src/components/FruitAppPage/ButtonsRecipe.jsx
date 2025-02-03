import { ButtonRecipe } from "./ButtonRecipe";

export const ButtonsRecipe = ({ className, handleSaveRecipe, onCloseForm }) => {
  return (
    <div className="showNewRecipe-form_btns">
      <ButtonRecipe
        title="Save"
        className={className}
        onClick={handleSaveRecipe}
      />
      <ButtonRecipe
        title="Cancel"
        className={className}
        onClick={onCloseForm}
      />
    </div>
  );
};
