import { GoogleGenAI } from "@google/genai";
import { AI_CONFIG } from "../constants";

let aiInstance: GoogleGenAI | null = null;

export const getGeminiInstance = () => {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

export const chatWithAI = async (message: string, history: { role: "user" | "model", parts: string[] }[] = []) => {
  try {
    const ai = getGeminiInstance();
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: AI_CONFIG.systemPrompt,
      },
    });

    // History needs to be formatted correctly for the SDK if we were using the internal state, 
    // but for simplicity here we'll just send the current message or use the chat object's persistence if we managed it.
    // To support history in this simple stateless-looking helper:
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again later or contact Aldi directly!";
  }
};
