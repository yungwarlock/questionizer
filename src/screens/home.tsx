import React from "react";

import HashLoader from "react-spinners/HashLoader";
import ArrowRight from "@heroicons/react/20/solid/ArrowRightIcon";

import {QuizStorage} from "../quiz-storage";
import {composeQuiz} from "../quiz-curator";
import {StateMachine} from "../state-machine";

import BackgroundImg from "../assets/background.jpeg";


interface HomeProps {
  quizId: string;
}

const Home = ({quizId}: HomeProps): JSX.Element => {
  const [topic, setTopic] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = await composeQuiz(topic);
    const db = new QuizStorage();
    await db.quizzes.add({...data, id: quizId});

    setLoading(false);
    StateMachine.readyWhenYouAre();
  };

  const LeftSection = (
    <div className="flex-grow z-20 md:pl-24 md:pt-40 flex flex-col items-center md:items-start justify-center md:justify-normal gap-2 text-white">
      <h3 className="text-5xl md:text-7xl font-medium">Questionizer</h3>
      <h6 className="text-xl pl-2">Turn anything into a quiz</h6>
    </div>
  );

  const RightSection = (
    <div className="fixed md:relative z-10 w-screen h-screen md:flex-grow flex flex-row-reverse md:p-20">
      <img src={BackgroundImg} className="md:rounded-xl brightness-50 md:brightness-100 object-cover" />
    </div>
  );

  const Questionizer = (
    <form onSubmit={onSubmit} className="absolute z-20 bottom-6 md:bottom-8 w-full px-4 md:px-20">
      <div className="w-full bg-white py-2 px-2 relative flex items-center overflow-hidden rounded-full">
        <input
          className="flex-grow outline-none w-full placeholder-gray-600 px-6 text-xl md:text-3xl rounded-l-full"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button type="submit" className="hover:bg-secondaryLight right-4 bg-secondary p-1 md:p-3 rounded-full">
          <ArrowRight className="w-10 h-10 m-auto text-white" />
        </button>
      </div>
    </form>
  );


  return (
    <div className="flex flex-col md:flex-row relative w-full h-full bg-background overflow-hidden">
      {loading && (
        <div className="fixed z-50 bg-black/60 w-full h-full flex flex-col gap-4 justify-center items-center">
          <HashLoader color="#A24527" size={70} />
          <h3 className="text-lg text-white">Loading</h3>
        </div>
      )}
      {LeftSection}
      {RightSection}
      {Questionizer}
    </div>
  );
};


export default Home;
