import React from "react";

import {Page} from "./state-machine";

import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Ready from "./screens/ready";

function App() {
  const [page, setPage] = React.useState<Page>(Page.Home);

  return (
    <div className="w-screen h-screen">
      {page === Page.Home && (
        <Home />
      )}

      {page === Page.Ready && (
        <Ready />
      )}

      {page === Page.Quiz && (
        <Quiz />
      )}
    </div>
  );
}

export default App
