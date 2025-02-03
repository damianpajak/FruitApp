import { supabase } from "../../supabaseClient";

export const deleteRecipes = async (recipeId) => {
  const { error } = await supabase.from("Recipes").delete().eq("id", recipeId);

  if (error) {
    console.error("Error: ", error.message);
    return false;
  }

  return true;
};
