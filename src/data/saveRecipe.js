import { supabase } from "../../supabaseClient";

export const saveRecipe = async (recipeData) => {
  const { data, error } = await supabase.from("Recipes").insert([
    {
      name: recipeData.name,
      author: recipeData.author,
      description: recipeData.description,
      prepare: recipeData.prepare,
      fruits: JSON.stringify({
        fruit1: recipeData.fruit1,
        fruit2: recipeData.fruit2,
        fruit3: recipeData.fruit3,
        fruit4: recipeData.fruit4,
      }),
    },
  ]);

  if (error) {
    console.error(error);
    return false;
  }

  console.log(data);
  return true;
};
