import React from "react";

import {State, StateMachine} from "./state-machine";

import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Ready from "./screens/ready";
import Complete from "./screens/complete";


function App() {
  const [currentState, setCurrentState] = React.useState<State>(State.New);
  const [quizId, setQuizId] = React.useState<string>("");

  React.useEffect(() => {
    if (StateMachine.getState() == State.New) {
      const id = Math.random().toString(36).substr(2, 9);
      setQuizId(id);
      StateMachine.goHome();
    }
  });

  React.useEffect(() => {
    const currentState = StateMachine.getState();
    setCurrentState(currentState);

    const unsub = StateMachine.addListener((state) => {
      setCurrentState(state);
    });

    return () => {
      unsub();
    }
  }, []);

  return (
    <div className="w-screen h-screen">
      {currentState === State.Home && (
        <Home quizId={quizId} />
      )}

      {currentState === State.Ready && (
        <Ready />
      )}

      {currentState === State.Quiz && (
        <Quiz quizId={quizId} />
      )}

      {currentState === State.Complete && (
        <Complete quizId={quizId} />
      )}
    </div>
  );
}

export default App
