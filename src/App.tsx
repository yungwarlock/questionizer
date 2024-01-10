import React from "react";

import {State, StateMachine} from "./state-machine";

import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Ready from "./screens/ready";
import Complete from "./screens/complete";

function App() {
  const [currentState, setCurrentState] = React.useState<State>(State.Home);

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
        <Home />
      )}

      {currentState === State.Ready && (
        <Ready />
      )}

      {currentState === State.Quiz && (
        <Quiz />
      )}

      {currentState === State.Complete && (
        <Complete />
      )}
    </div>
  );
}

export default App
