import { useState } from "react";

export const useChangeForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    author: "",
    description: "",
    prepare: "",
    fruit1: {
      name: "",
      nutritions: {
        carbohydrates: "",
        protein: "",
        fat: "",
        calories: "",
        sugar: "",
      },
    },
    fruit2: {
      name: "",
      nutritions: {
        carbohydrates: "",
        protein: "",
        fat: "",
        calories: "",
        sugar: "",
      },
    },
    fruit3: {
      name: "",
      nutritions: {
        carbohydrates: "",
        protein: "",
        fat: "",
        calories: "",
        sugar: "",
      },
    },
    fruit4: {
      name: "",
      nutritions: {
        carbohydrates: "",
        protein: "",
        fat: "",
        calories: "",
        sugar: "",
      },
    },
  });

  const handleTyping = (e) => {
    const { name, value } = e.target;

    const isJsonField = (e) => {
      const jsonFields = ["fruit1", "fruit2", "fruit3", "fruit4"];
      return jsonFields.includes(e);
    };

    let parsedValue = value;

    if (isJsonField(name)) {
      try {
        parsedValue = JSON.parse(value);
      } catch (err) {
        console.error(`Failed to parse JSON for field ${name}:`, value);
      }
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  return { formValues, setFormValues, handleTyping };
};
