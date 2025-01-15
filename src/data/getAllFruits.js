import axios from "axios";

export const getAllFruits = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/fruit/all");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching fruits:", error);
    throw error;
  }
};
