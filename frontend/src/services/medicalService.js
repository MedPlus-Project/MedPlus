import axios from "axios";
import BASE_URL from "../config/ApiConfig";

export const postMedicalData = async (data) => {
  try {
    const response = await axios.post(BASE_URL + "medical-data", data);

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
