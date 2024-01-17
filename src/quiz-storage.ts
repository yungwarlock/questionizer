import {Quiz} from "./quiz-curator";

export class QuizStorage {
  public static saveQuiz(key: string, quiz: Quiz): void {
    localStorage.setItem(key, JSON.stringify(quiz));
  }

  public static getQuiz(key: string): Quiz | null {
    const quiz = localStorage.getItem(key);
    if (quiz) {
      return JSON.parse(quiz);
    }
    return null;
  }

  public static deleteQuiz(key: string): void {
    localStorage.removeItem(key);
  }
}
