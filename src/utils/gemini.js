import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constants";

// Replace with your Gemini API Key
const API_KEY = GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);



// Function to fetch movie suggestions from Gemini API
export const getMovieSuggestions = async (query) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const prompt = `Act as a movie recommendation system. Suggest 5 movies for the query: "${query}". Only return movie names, comma-separated.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;

        return response.text(); // Returns movie names as a string
    } catch (error) {
        console.error("Error fetching data:", error);
        return "Error fetching suggestions";
    }
};
