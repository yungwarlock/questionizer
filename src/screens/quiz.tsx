import React from "react";

import ArrowLeft from "@heroicons/react/20/solid/ArrowLeftIcon";
import ArrowRight from "@heroicons/react/20/solid/ArrowRightIcon";

import {Question, Quiz, composeQuiz} from "../quiz-curator";

const Quiz = (): JSX.Element => {
  const [topic, setTopic] = React.useState<string>("");
  const [quiz, setQuiz] = React.useState<Quiz | null>(null);
  const [questionIndex, setQuestionIndex] = React.useState<number>(0);

  const onClick = async () => {
    const res = await composeQuiz(topic);
    setQuiz(res);
  };

  const onClickNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const onClickPrev = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  return (
    <div className="bg-background w-screen h-screen flex flex-col gap-4 items-center py-6">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-white/30 text-3xl">Questionizer</h1>
        <h6 className="text-2xl">4:00</h6>
      </div>
      <div className="flex-grow w-full px-8 flex items-center justify-between">
        <div className="w-3/12 flex">
          <ArrowLeft onClick={onClickPrev} className="transition-all cursor-pointer hover:h-24 hover:w-24 w-16 h-16 text-white/70" />
        </div>

        <div className="flex-grow h-full bg-white/50 p-6 flex flex-col">
          <div className="h-20 flex justify-center items-center font-medium text-lg">
            <h3>{questions[questionIndex].question}</h3>
          </div>

          <div className="flex-grow flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="bg-white/10 cursor-pointer rounded-lg flex gap-2 p-4">
                <p>A.</p>
                <p>{questions[questionIndex].options[0]}</p>
              </div>
              <div className="bg-white/10 cursor-pointer rounded-lg flex gap-2 p-4">
                <p>B.</p>
                <p>{questions[questionIndex].options[1]}</p>
              </div>
              <div className="bg-white/10 cursor-pointer rounded-lg flex gap-2 p-4">
                <p>C.</p>
                <p>{questions[questionIndex].options[2]}</p>
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
