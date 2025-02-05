import { ButtonsRecipe } from "./ButtonsRecipe";
import { InputRecipe } from "./InputRecipe";
import { TextAreaRecipe } from "./TextAreaRecipe";
import { SelectRecipe } from "./SelectRecipe";
import { useState } from "react";
import { saveRecipe } from "../../data/saveRecipe";

export const NewRecipeForm = ({
  formValues,
  fruits,
  handleTyping,
  onCloseForm,
}) => {
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.name) newErrors.name = "Recipe name is required";
    if (!formValues.author) newErrors.author = "Author name is required";
    if (!formValues.description)
      newErrors.description = "Description is required";
    if (!formValues.prepare) newErrors.prepare = "Recipe name is required";

    ["fruit1", "fruit2", "fruit3", "fruit4"].forEach((fruit, idx) => {
      if (!formValues[fruit]?.name) {
        newErrors[fruit] = `Fruit ${idx + 1} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveRecipe = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSaving(true);

    const success = await saveRecipe(formValues);

    if (success) {
      alert("Saved");
      onCloseForm();
      window.location.reload();
    } else {
      alert("Error");
    }

    setIsSaving(false);
  };

  return (
    <form className="fruitApp_showNewRecipe-form">
      <div>
        <InputRecipe
          title="Recipe name"
          type="text"
          name="name"
          placeholder="Enter the name of the recipe ..."
          className="showNewRecipe-form_input"
          value={formValues.name || ""}
          handleTyping={handleTyping}
        />
        {errors.name && <p className="error-msg">{errors.name}</p>}
      </div>
      <div>
        <InputRecipe
          title="Author name"
          type="text"
          name="author"
          placeholder="Enter the name of the recipe author ..."
          className="showNewRecipe-form_input"
          classNameLabel="showNewRecipe-form_label"
          value={formValues.author || ""}
          handleTyping={handleTyping}
        />
        {errors.author && <p className="error-msg">{errors.author}</p>}
      </div>
      <div>
        <TextAreaRecipe
          title="Add description"
          type="text"
          name="description"
          placeholder="Enter description for recipe"
          className="showNewRecipe-form_textarea"
          classNameLabel="showNewRecipe-form_label"
          value={formValues.description || ""}
          handleTyping={handleTyping}
        />
        {errors.description && (
          <p className="error-msg">{errors.description}</p>
        )}
      </div>
      <div>
        <TextAreaRecipe
          title="How to prepare a salad"
          type="text"
          name="prepare"
          placeholder="Enter description for recipe"
          className="showNewRecipe-form_textarea"
          classNameLabel="showNewRecipe-form_label"
          value={formValues.prepare || ""}
          handleTyping={handleTyping}
        />
        {errors.prepare && <p className="error-msg">{errors.prepare}</p>}
      </div>
      <div>
        {[1, 2, 3, 4].map((num) => (
          <div key={num}>
            <SelectRecipe
              title={`Pick fruit ${num}`}
              name={`fruit${num}`}
              className="showNewRecipe-form_select"
              classNameLabel="showNewRecipe-form_label"
              values={fruits || []}
              handleTyping={handleTyping}
            />
            {errors[`fruit${num}`] && (
              <p className="error-msg">{errors[`fruit${num}`]}</p>
            )}
          </div>
        ))}
      </div>

      <ButtonsRecipe
        className="showNewRecipe-form_btn"
        isSaving={isSaving}
        handleSaveRecipe={handleSaveRecipe}
        onCloseForm={onCloseForm}
      />
    </form>
  );
};
