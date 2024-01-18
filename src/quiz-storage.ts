import Dexie from "dexie";

import {Quiz} from "./quiz-curator";

interface QuizEntry extends Quiz {
  id?: string;
}

interface ResultEntry {
  id?: string;
  results: number[];
  totalCorrectAnswers: number;
}

export class QuizStorage extends Dexie {
  quizzes!: Dexie.Table<QuizEntry, string>;
  results!: Dexie.Table<ResultEntry, string>;

  constructor() {
    super("QuizStorage");
    this.version(1).stores({
      quizzes: "id, topic, *questions",
      results: "id, results, totalCorrectAnswers"
    });
  }
}
