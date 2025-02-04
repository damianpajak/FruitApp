import axios from "axios";

export const getAllFruits = async () => {
  try {
    const response = await axios.get("/.netlify/functions/fetchFruits");
    return response.data;
  } catch (error) {
    console.error("Error fetching fruits:", error);
    throw error;
  }
};
