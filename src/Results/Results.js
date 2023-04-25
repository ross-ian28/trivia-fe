import React from 'react';
import { useLocation } from "react-router-dom";
import "./Result.css"
export default function Result() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const questions = JSON.parse(searchParams.get("data"));

  return (
    <div className="result-container">
      <h2>"You finished the quiz!"</h2>
      <h3>You got a { questions.score }/10</h3>
      <a href="/"><button className="back-to-home-button">Play Again?</button></a>
    </div>
  );
}
