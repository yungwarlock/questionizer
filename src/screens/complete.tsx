import React from "react";


const Complete = (): JSX.Element => {
  return (
    <div className="w-screen h-screen bg-background flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-6xl font-medium text-white">Test Complete</h3>
        <h3 className="text-2xl font-medium text-white">Achievements</h3>
      </div>

      <div className="flex justify-center items-center gap-28 py-16 bg-red-400 w-[50%]">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-6xl">4</h3>
          <h3 className="text-lg">Days</h3>
          <h3 className="text-md">Streak</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-6xl">15</h3>
          <h3 className="text-lg">Questions</h3>
          <h3 className="text-md">Correct</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-6xl">3</h3>
          <h3 className="text-lg">mins</h3>
          <h3 className="text-md">time</h3>
        </div>
      </div>

      <div className="flex justify-center items-center gap-24 w-[50%]">
        <button className="px-8 py-4 rounded-2xl bg-red-400 hover:bg-red-300">Try again</button>
        <button className="px-8 py-4 rounded-2xl bg-red-400 hover:bg-red-300">Corrections</button>
      </div>

    </div>
  );
};


export default Complete;
