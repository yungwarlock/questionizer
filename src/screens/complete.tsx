import React from "react";


const Complete = (): JSX.Element => {
  return (
    <div className="w-screen h-screen bg-background flex flex-col justify-center items-center">
      <h3 className="text-6xl font-medium text-white">Quiz Complete</h3>
      <h3 className="text-2xl font-medium text-white">Achievements</h3>
      <div className="flex justify-center items-center gap-10 py-20 bg-red-400 w-[80%]">
        <div>
          <h3>4 days streak</h3>
        </div>
        <div>
          <h3>4 days streak</h3>
        </div>
        <div>
          <h3>4 days streak</h3>
        </div>
      </div>
    </div>
  );
};


export default Complete;
