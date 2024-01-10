import React from "react";

import HashLoader from "react-spinners/HashLoader";
import ArrowRight from "@heroicons/react/20/solid/ArrowRightIcon";

import BackgroundImg from "../assets/background.jpeg";


const Home = (): JSX.Element => {
  const [topic, setTopic] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  };

  const LeftSection = (
    <div className="flex-grow flex flex-col gap-2 px-16 py-40 text-white">
      <h3 className="text-7xl font-medium">Questionizer</h3>
      <h6 className="text-2xl pl-2">Turn anything into a quiz</h6>
    </div>
  );

  const RightSection = (
    <div className="flex-grow flex flex-row-reverse p-16">
      <img src={BackgroundImg} className="rounded-xl" />
    </div>
  );

  const Questionizer = (
    <form onSubmit={onSubmit} className="absolute z-10 bottom-10 w-full h-20 px-16">
      <div className="w-full relative h-20 flex items-center overflow-hidden rounded-full">
        <input
          className="flex-grow outline-none w-full placeholder-gray-600 h-full px-6 text-3xl rounded-l-full"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button type="submit" className="absolute hover:bg-[#cb917d] right-4 bg-[#bf6242] p-3 rounded-full">
          <ArrowRight className="w-10 h-10 m-auto" />
        </button>
      </div>
    </form>
  );


  return (
    <div className="flex relative w-full h-full bg-[#d3552c]">
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
