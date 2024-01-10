import React from "react";

import Home from "./screens/home";
import {Page} from "./state-machine";
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
        <div>
          <h1>About</h1>
          <button onClick={() => setPage(Page.Home)}>Home</button>
        </div>
      )}
    </div>
  );
}

export default App
