import React from "react";

import {CircularProgressbar, buildStyles} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";


const Complete = (): JSX.Element => {
  const correctAnswers = 8;
  const totalQuestions = 10;
  const percentage = (correctAnswers / totalQuestions) * 100;

  const [progressBar, setProgressBar] = React.useState(0);

  React.useEffect(() => {
    document.title = "Test Complete";
    const interval = setInterval(() => {
      if (progressBar === percentage) {
        clearInterval(interval);
        return;
      }
      setProgressBar(progressBar + 1);
    }, 5);

    return () => {
      clearInterval(interval);
    }

  }, [progressBar, percentage]);

  return (
    <div className="w-screen h-screen bg-background flex justify-center items-center p-4">
      <div className="py-8 px-4 md:p-12 w-full md:w-fit rounded-2xl bg-secondary flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-4xl md:text-6xl font-medium text-white">Test Complete</h3>
        </div>

        <div className="flex justify-between items-center text-white py-16 px-4 md:px-2 w-full">
          <div className="flex flex-col justify-center items-center w-full h-[300px]">
            <CircularProgressbar value={progressBar} text={`${correctAnswers}/${totalQuestions}`}
              styles={buildStyles({
                textSize: '16px',

                pathTransitionDuration: 0.5,

                // pathTransition: 'none',

                // Colors
                pathColor: "#c39f93",
                textColor: '#ffffff',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
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
