import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Intro.css"
export default function Intro() {
  const [difficulty, setDifficulty] = useState("easy");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPending(true);
    console.log(difficulty)

    await fetch("http://localhost:4000/api/v1/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        difficulty: difficulty
      })
    })
    .then(res => res.json())
    .then(data => {
        const params = new URLSearchParams({
          data: JSON.stringify(data)
        });
        navigate(`/question1?${params}`);
      })
    };

  return (
    <div className="intro-container">
      <h1>Welcome to Trivia!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select an option:
          <select value={difficulty} onChange={handleChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        { !isPending && <button className="intro-button" type="submit">Submit</button>}
        { isPending && <button className="intro-button" type="submit" disabled>Submitting</button>}
      </form>
    </div>
  );
}
