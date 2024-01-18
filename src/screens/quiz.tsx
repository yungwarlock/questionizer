import React from "react";

import ArrowLeft from "@heroicons/react/20/solid/ArrowLeftIcon";
import ArrowRight from "@heroicons/react/20/solid/ArrowRightIcon";

import {Quiz} from "../quiz-curator";
import {QuizStorage} from "../quiz-storage";
import {StateMachine} from "../state-machine";

interface QuizProps {
  quizId: string;
}

const Quiz = ({quizId}: QuizProps): JSX.Element => {
  const [quiz, setQuiz] = React.useState<Quiz | null>(null);
  const [questionIndex, setQuestionIndex] = React.useState<number>(0);
  const [answers, setAnswers] = React.useState<Record<number, number | undefined>>({});

  React.useEffect(() => {
    (async () => {
      const db = new QuizStorage();
      const quiz = await db.quizzes.get(quizId);
      if (quiz) {
        setQuiz(quiz);
      } else {
        window.location.href = "/";
      }
    })();
  }, []);

  const calculateScore = () => {
    if (quiz === null) return 0;

    let numOfCorrect = 0;
    for (let i = 0; i < quiz.questions.length; i++) {
      if (quiz.questions[i].correctAnswer === answers[i]) {
        numOfCorrect++;
      }
    }

    return numOfCorrect;
  }

  const completeQuiz = () => {
    const score = calculateScore();

    const db = new QuizStorage();
    db.results.add({
      id: quizId,
      totalCorrectAnswers: score,
      results: Object.values(answers) as number[],
    });

    StateMachine.completeQuiz();
  }

  const onClickNext = () => {
    if (quiz === null) return;

    if (questionIndex === quiz.questions.length - 1) {
      completeQuiz();
      return;
    }

    if (questionIndex < quiz.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const onClickPrev = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const onClickAnswer = (answerIndex: number) => {
    if (isSelected(answerIndex)) {
      setAnswers({...answers, [questionIndex]: undefined});
      return;
    }
    setAnswers({...answers, [questionIndex]: answerIndex});
  };

  const isSelected = (answerIndex: number) => {
    return answers[questionIndex] === answerIndex;
  };

  return (
    <div className="bg-background w-screen h-screen flex flex-col gap-4 items-center">
      <div className="flex-grow w-full p-6 flex items-center justify-between">
        <div className="hidden w-3/12 md:flex">
          <ArrowLeft onClick={onClickPrev} className="transition-all cursor-pointer hover:h-24 hover:w-24 w-16 h-16 text-white/70" />
        </div>

        <div className="flex-grow h-full rounded-lg bg-white/40 gap-4 px-4 py-6 flex flex-col">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-white/30 text-3xl">Questionizer</h1>
          </div>

          <div className="h-20 flex flex-col gap-3 mb-6 justify-center items-center font-medium text-lg">
            <h3 className="text-md font-normal">Question {questionIndex + 1}</h3>
            <h3 className="transition-all font-4xl">{quiz?.questions[questionIndex].question}</h3>
          </div>

          <div className="flex-grow flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div onClick={() => onClickAnswer(0)} className={`transition-all bg-white/10 ${isSelected(0) ? "bg-yellow-400" : ""} cursor-pointer rounded-lg flex gap-2 p-4`}>
                <p>A.</p>
                <p>{quiz?.questions[questionIndex].options[0]}</p>
              </div>
              <div onClick={() => onClickAnswer(1)} className={`transition-all bg-white/10 ${isSelected(1) ? "bg-yellow-400" : ""} cursor-pointer rounded-lg flex gap-2 p-4`}>
                <p>B.</p>
                <p>{quiz?.questions[questionIndex].options[1]}</p>
              </div>
              <div onClick={() => onClickAnswer(2)} className={`transition-all bg-white/10 ${isSelected(2) ? "bg-yellow-400" : ""} cursor-pointer rounded-lg flex gap-2 p-4`}>
                <p>C.</p>
                <p>{quiz?.questions[questionIndex].options[2]}</p>
              </div>
            </div>
          </div>

          <div className="md:hidden h-16 flex gap-2 justify-between rounded-lg bg-white/20 px-4">
            <div onClick={onClickPrev} className="w-1/2 flex items-center">
              <ArrowLeft className="transition-all cursor-pointer w-8 h-8 text-white/40" />
              <h3 className="text-sm">Previous</h3>
            </div>
            <div onClick={onClickNext} className="w-1/2 flex items-center flex-row-reverse">
              <ArrowRight className="transition-all cursor-pointer w-8 h-8 text-white/40" />
              <h3 className="text-sm">Next</h3>
            </div>
          </div>

        </div>
        <div className="hidden w-3/12 md:flex flex-row-reverse">
          <ArrowRight onClick={onClickNext} className="transition-all cursor-pointer hover:h-24 hover:w-24 w-16 h-16 text-white/70" />
        </div>
      </div>
    </div>
  );
}


export default Quiz;
