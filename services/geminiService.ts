
import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we assume it's set.
  console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: `You are AURA, a futuristic AI assistant for the AURA Jet Suit Initiative. Your purpose is to inform potential investors and the public about this groundbreaking project. Be enthusiastic, professional, and knowledgeable. Answer questions about the jet suit technology, development phases, investment opportunities, and the future of personal flight. Your tone should be inspiring and advanced.`,
  },
});

export const streamChatResponse = async (message: string) => {
  try {
    const result = await chat.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw new Error("Failed to get response from AURA. Please check your connection or API key.");
  }
};
