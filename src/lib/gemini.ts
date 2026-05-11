import { GoogleGenAI } from '@google/genai';

// Singleton instance, lazily initialized
let genAIClient: GoogleGenAI | null = null;

export function getGenAI(): GoogleGenAI {
  if (!genAIClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('GEMINI_API_KEY is not set. AI features might fail in production.');
    }
    genAIClient = new GoogleGenAI({ apiKey: apiKey || '' });
  }
  return genAIClient;
}

/**
 * Utility to call Gemini API with retry logic and token constraint awareness.
 * Used by the Intelligence Engines for deep analysis.
 */
export async function analyzeWorkflowData(
  prompt: string, 
  data: string, 
  maxRetries = 3
): Promise<string> {
  const client = getGenAI();
  
  // Basic token optimization: truncate if incredibly large
  // In production, we'd use proper tokenizer or streaming logic
  const optimizedData = data.length > 50000 ? data.slice(0, 50000) + "...[TRUNCATED]" : data;
  
  let attempt = 0;
  
  while (attempt < maxRetries) {
    try {
      const response = await client.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: prompt }, { text: optimizedData }]}
        ],
        config: {
          temperature: 0.2, // Low temperature for deterministic analysis
        }
      });
      
      return response.text() || '';
    } catch (error) {
      attempt++;
      console.error(`Gemini API Error (Attempt ${attempt}/${maxRetries}):`, error);
      
      if (attempt >= maxRetries) {
        throw new Error('Failed to generate intelligence after multiple attempts.');
      }
      
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    }
  }
  
  throw new Error('Unexpected exit from retry loop.');
}
