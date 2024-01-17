import React from "react";

import ArrowLeft from "@heroicons/react/20/solid/ArrowLeftIcon";
import ArrowRight from "@heroicons/react/20/solid/ArrowRightIcon";

import {Question, Quiz, composeQuiz} from "../quiz-curator";
import {StateMachine} from "../state-machine";
import {QuizStorage} from "../quiz-storage";

interface QuizProps {
  quizId: string;
}

const Quiz = ({quizId}: QuizProps): JSX.Element => {
  const [quiz, setQuiz] = React.useState<Quiz | null>(null);
  const [questionIndex, setQuestionIndex] = React.useState<number>(0);
  const [answers, setAnswers] = React.useState<Record<number, number | undefined>>({});


  React.useEffect(() => {
    const quiz = QuizStorage.getQuiz(quizId);
    if (quiz) {
      setQuiz(quiz);
    } else {
      console.log("Quiz not found");
      window.location.href = "/";
    }
  }, []);

  const completeQuiz = () => StateMachine.completeQuiz();

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
    console.log(answers);
  };

  const isSelected = (answerIndex: number) => {
    return answers[questionIndex] === answerIndex;
  };

  return (
    <div className="bg-background w-screen h-screen flex flex-col gap-4 items-center py-6">
      <div className="flex-grow w-full px-8 flex items-center justify-between">
        <div className="w-3/12 flex">
          <ArrowLeft onClick={onClickPrev} className="transition-all cursor-pointer hover:h-24 hover:w-24 w-16 h-16 text-white/70" />
        </div>

        <div className="flex-grow h-full bg-white/50 gap-4 p-6 flex flex-col">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-white/30 text-3xl">Questionizer</h1>
            <h6 className="text-2xl">4:00</h6>
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
        </div>
        <div className="w-3/12 flex flex-row-reverse">
          <ArrowRight onClick={onClickNext} className="transition-all cursor-pointer hover:h-24 hover:w-24 w-16 h-16 text-white/70" />
        </div>
      </div>
    </div>
  );
}

const questions = [
  {
    question: "Which function is used to serialize an object into a JSON String",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.serialize()"
    ],
    correctAnswer: 0,
    explanation: "JSON.stringify() is used to serialize an object into a JSON String"
  },
  {
    question: "Which function is used to deserialize a JSON String into an object",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.serialize()"
    ],
    correctAnswer: 1,
    explanation: "JSON.parse() is used to deserialize a JSON String into an object"
  },
  {
    question: "Which function is used to serialize an object into a JSON String",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.serialize()"
    ],
    correctAnswer: 0,
    explanation: "JSON.stringify() is used to serialize an object into a JSON String"
  },
] as Question[];

export default Quiz;
