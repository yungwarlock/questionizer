import React from "react";


const Complete = (): JSX.Element => {
  return (
    <div className="w-screen h-screen bg-background flex justify-center items-center p-4">
      <div className="py-8 px-4 md:p-12 w-full md:w-fit rounded-2xl bg-secondary flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-4xl md:text-6xl font-medium text-white">Test Complete</h3>
          <h3 className="text-xl md:text-2xl font-medium text-white">Achievements</h3>
        </div>

        <div className="flex justify-between items-center text-white py-16 px-4 md:px-2 w-full">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-4xl md:text-6xl font-bold">4</h3>
            <h3 className="text-xs md:text-lg">Days Streak</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-4xl md:text-6xl font-bold">15</h3>
            <h3 className="text-xs md:text-lg">Questions Correct</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-4xl md:text-6xl font-bold">3</h3>
            <h3 className="text-xs md:text-lg">mins time</h3>
          </div>
        </div>

        <div className="w-full md:px-4 flex justify-between items-center">
          <button className="px-6 py-3 rounded-2xl bg-secondaryLight hover:bg-secondaryLight">Try again</button>
          <button className="px-6 py-3 rounded-2xl bg-secondaryLight hover:bg-secondaryLight">Corrections</button>
        </div>
      </div>
    </div>
  );
};


export default Complete;
