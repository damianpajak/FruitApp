import { supabase } from "../../supabaseClient";

export const updateRecipe = async (recipeId, updatedData) => {
  const { error } = await supabase
    .form("Recipes")
    .update(updatedData)
    .eq("id", recipeId);

  if (error) {
    console.error(error.message);
    return false;
  }

  return true;
};
