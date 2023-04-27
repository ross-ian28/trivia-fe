import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Intro.css"
export default function Intro() {
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPending(true);

    await fetch("http://localhost:4000/api/v1/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        difficulty: difficulty,
        category: category
      })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
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
          Select a difficulty:
          <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <label>
          Select a Category:
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">Any Categories</option>
            <option value="9">General Knowledge</option>
            <option value="10">Books</option>
            <option value="11">Film</option>
            <option value="12">Music</option>
            <option value="13">Musicals & Theatres</option>
            <option value="14">Television</option>
            <option value="15">Video Games</option>
            <option value="16">Board Games</option>
            <option value="29">Comics</option>
            <option value="31">Anime & Manga</option>
            <option value="32">Cartoon & Animation</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="30">Science: Gadgets</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
          </select>
        </label>
        { !isPending && <button className="intro-button" type="submit">Submit</button>}
        { isPending && <button className="intro-button" type="submit" disabled>Creating Questions</button>}
      </form>
    </div>
  );
}
