 
  import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const extractExpense = async (text) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    
const prompt = `
You are an expense extraction assistant.

IMPORTANT:
- Extract ONLY from the given text
- Do NOT create new data
- Do NOT give multiple expenses
- Do NOT give examples

Text:
"${text}"

Return ONLY one JSON object:

{
  "title": string,
  "amount": number,
  "category": string,
  "date": "${today}"
}

Rules:
- Use exact data from text
- petrol → travel
- If one expense → return only one object
- No extra text, no explanation
`;
    
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", 
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const rawText = response.choices[0].message.content;

    console.log("raw response:", rawText);

    const cleanText = (rawText || "")
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const data = JSON.parse(cleanText);

    console.log("parsed object:", data);

    return data;

  } catch (error) {
    
    return null;
  }
};
  
  // import { GoogleGenAI } from "@google/genai";

  
  // const genAI = new GoogleGenAI({
  //   apiKey: import.meta.env.VITE_GEMINI_API_KEY}
  // );

  // export const extractExpense = async (text) => {
  //   try {
  //    const today=new Date().toISOString().split("T")[0];
    
  //     const prompt = `
  //     you are an expense extraction assistent.
  //     Extract details in JSON format from the text:
  //     "${text}"
  //     Include:
  //     -title (short name of expense),
  //     -amount (in number),
  //     -category (like , food ,travel etc),
  //     -date (use current date ${today})
  //     `;

  //     const response=await genAI.models.generateContent({
  //       model:"gemini-2.0-flash",
  //       contents: prompt,
  //     })
  //     console.log("raw response ",response.text);
  //     const  cleanText=(response.text || "")
  //      .replace(/```json/g, "")
  //     .replace(/```/g, "")
  //     .trim();
  //     const data=JSON.parse(cleanText);
  //     console.log("parsed object: ",data);
  //     return data;
  //   } catch (error) {
  //     console.error("❌ Gemini API Error:", error);
  //     return null;
  //   }
  // };