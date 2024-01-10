import React from "react";

import {Quiz, composeQuiz} from "../quiz-curator";

const Quiz = (): JSX.Element => {
  const [topic, setTopic] = React.useState<string>("");
  const [quiz, setQuiz] = React.useState<Quiz | null>(null);

  const onClick = async () => {
    const res = await composeQuiz(topic);
    setQuiz(res);
  };
  return (
    <>
      <h1>Questionizer</h1>
      <input type="text" className="border rounded-md" value={topic} onChange={(e) => setTopic(e.target.value)} />
      <button className="border rounded-md w-fit" onClick={onClick}>Generate</button>
      <div>
        {JSON.stringify(quiz)}
      </div>
    </>
  )
}
