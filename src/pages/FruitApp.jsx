import { useState } from "react";
import { ShowNewRecipe } from "../components/FruitAppPage/ShowNewRecipe";
import { ShowRecipe } from "../components/FruitAppPage/ShowRecipe";
import { ShowSelectedFruitsCalc } from "../components/FruitAppPage/ShowSelectedFruitsCalc";
import { useChangeForm } from "../customHooks/UseChangeForm";
import { useShowFruitData } from "../customHooks/UseShowFruitData";

export const FruitApp = () => {
  const { formValues, setFormValues, handleTyping } = useChangeForm();
  const { fruits } = useShowFruitData();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [openCreate, setOpenCreator] = useState(false);
  const [buttonCreator, setButtonCreator] = useState(true);

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setFormValues(recipe || {});
    setOpenCreator(false);
    setButtonCreator(true);
  };

  return (
    <div className="fruitApp container">
      <ShowRecipe onSelectRecipe={handleSelectRecipe} />
      <ShowNewRecipe
        formValues={formValues}
        fruits={fruits}
        handleTyping={handleTyping}
        setOpenCreator={setOpenCreator}
        openCreate={openCreate}
        setSelectedRecipe={setSelectedRecipe}
        buttonCreator={buttonCreator}
        setButtonCreator={setButtonCreator}
        setFormValues={setFormValues}
      />
      <ShowSelectedFruitsCalc
        openCreate={openCreate}
        formValues={formValues}
        selectedRecipe={selectedRecipe}
      />
    </div>
  );
};
