import React from "react";

import {StateMachine} from "../state-machine";


const Ready = (): JSX.Element => {
  const [size, setSize] = React.useState(15);
  const [count, setCount] = React.useState(5);
  const [startCountDown, setStartCountDown] = React.useState(false);

  React.useEffect(() => {
    if (startCountDown) {
      setSize(15);
      const interval = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      const sizeInterval = setInterval(() => {
        setSize((prev) => prev - 1);
      }, 150);

      if (count === 0) {
        setSize(15);
        clearInterval(interval);
        clearInterval(sizeInterval);
        StateMachine.startQuiz();
      }

      return () => {
        clearInterval(interval);
        clearInterval(sizeInterval);
      }
    }
  }, [count, startCountDown]);

  return (
    <div className="w-screen h-screen bg-background flex flex-col items-center justify-center text-white">
      {!startCountDown && (
        <>
          <h1 className="text-7xl font-medium">Ready</h1>
          <div className="w-1/2 h-1/2 flex items-center justify-center">
            <button
              className="bg-secondaryLight hover:bg-secondary p-4 rounded-full"
              onClick={() => setStartCountDown(true)}
            >
              <p className="text-4xl">Start</p>
            </button>
          </div>
        </>
      )}
      {startCountDown && (
        <>
          <h1 className="text-7xl font-medium">Quiz starts in</h1>
          <div className="w-1/2 h-1/2 flex items-center justify-center">
            <p style={{
              fontSize: `${size}rem`,
            }}>{count}</p>
          </div>
        </>
      )}
    </div>
  );
};


export default Ready;
