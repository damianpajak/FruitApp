import { supabase } from "../../supabaseClient";

export const getRecipes = async () => {
  const { data, error } = await supabase.from("Recipes").select("*");
  if (error) {
    console.error("Błąd pobierania danych:", error);
    return [];
  }

  console.log("Dane pobrane z Supabase:", data);

  return data.map((recipe) => ({
    ...recipe,
    fruits: recipe.fruits
      ? JSON.parse(recipe.fruits)
      : {
          fruit1: {
            name: "No information",
            nutritions: {
              carbohydrates: 0,
              protein: 0,
              fat: 0,
              calories: 0,
              sugar: 0,
            },
          },
          fruit2: {
            name: "No information",
            nutritions: {
              carbohydrates: 0,
              protein: 0,
              fat: 0,
              calories: 0,
              sugar: 0,
            },
          },
          fruit3: {
            name: "No information",
            nutritions: {
              carbohydrates: 0,
              protein: 0,
              fat: 0,
              calories: 0,
              sugar: 0,
            },
          },
          fruit4: {
            name: "No information",
            nutritions: {
              carbohydrates: 0,
              protein: 0,
              fat: 0,
              calories: 0,
              sugar: 0,
            },
          },
        },
  }));
};
