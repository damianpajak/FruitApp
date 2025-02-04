import axios from "axios";

export const getAllFruits = async () => {
  try {
    const response = await axios.get("/api/fruit/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching fruits:", error);
    throw error;
  }
};
