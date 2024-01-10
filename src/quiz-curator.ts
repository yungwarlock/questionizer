import promptTemplate from "./promptTemplate";

const APIKEY = import.meta.env.VITE_OPENAI_API_KEY as string;


/**
 * Compose a quiz from a given topic
 */
export const composeQuiz = async (topic: string): Promise<Quiz> => {
  const api = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + APIKEY,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo-1106",
      temperature: 0.9,
      messages: [
        {
          "role": "system",
          "content": promptTemplate,
        },
        {
          "role": "user",
          "content": `
          Topic: ${topic}
          `
        },
      ],
    }),
  });

  const res = await api.json();
  const data = res.choices[0].message.content.replace("```json", "").replace("```", "");
  const questions = JSON.parse(data) as Question[];
  return {
    topic,
    questions,
  }
}

export interface Question {
  question: string;
  options: string[];
  explanation: string;
  correctAnswer: number;
}

export interface Quiz {
  topic: string;
  questions: Question[];
}

