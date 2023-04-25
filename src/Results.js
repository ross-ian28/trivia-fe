import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [questions, setQuestions] = useState(JSON.parse(searchParams.get("data")));

  return (
    <div>
      <h2>"You finished the quiz!"</h2>
      <h3>You got a { questions.score }/10</h3>
    </div>
  );
}
