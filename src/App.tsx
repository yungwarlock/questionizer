import React from "react";

import {Quiz, composeQuiz} from "./quiz-curator";

function App() {
  const [topic, setTopic] = React.useState<string>("");
  const [quiz, setQuiz] = React.useState<Quiz | null>(null);

  const onClick = async () => {
    const res = await composeQuiz(topic);
    setQuiz(res);
  };

  return (
    <div className="flex flex-col items-center gap-4 h-screen p-8">
      <h1>Questionizer</h1>
      <input type="text" className="border rounded-md" value={topic} onChange={(e) => setTopic(e.target.value)} />
      <button className="border rounded-md w-fit" onClick={onClick}>Generate</button>
      <div>
        {JSON.stringify(quiz)}
      </div>
    </div>
  );
}

export default App
