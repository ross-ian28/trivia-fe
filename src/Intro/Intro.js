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

    await fetch("https://trivia-api-edqv.onrender.com/api/v1/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        difficulty: difficulty,
        category: category
      }),
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
        const params = new URLSearchParams({
          data: JSON.stringify(data)
        });
        navigate(`/question1?${params}`);
      })
    };

  const easyCategories = ["9", "10", "11", "12", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "26", "27", "28", "29", "31", "32"];
  const mediumCategories = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32"];
  const hardCategories = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "27", "28", "29", "31", "32"];

  const filteredCategories =
    difficulty === "easy"
    ? easyCategories
    : difficulty === "medium"
    ? mediumCategories
    : hardCategories;

    function getCategoryName(catId) {
    switch (catId) {
      case "9":
        return "General Knowledge";
      case "10":
        return "Books";
      case "11":
        return "Film";
      case "12":
        return "Music";
      case "13":
        return "Musicals & Theatres";
      case "14":
        return "Television";
      case "15":
        return "Video Games";
      case "16":
        return "Board Games";
      case "17":
        return "Science & Nature";
      case "18":
        return "Science: Computers";
      case "19":
        return "Science: Mathematics";
      case "20":
        return "Mythology";
      case "21":
        return "Sports";
      case "22":
        return "Geography";
      case "23":
        return "History";
      case "24":
        return "Politics";
      case "25":
        return "Art";
      case "26":
        return "Celebrities";
      case "27":
        return "Animals";
      case "28":
        return "Vehicles";
      case "29":
        return "Comics";
      case "30":
        return "Science: Gadgets";
      case "31":
        return "Anime & Manga";
      case "32":
        return "Cartoon & Animation";
      default:
        return "";
      };
    }
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
            {filteredCategories.map(cat => (
              <option key={cat} value={cat}>
                {getCategoryName(cat)}
              </option>
            ))}
          </select>
        </label>
        { !isPending && <button className="intro-button" type="submit">Submit</button>}
        { isPending && <button className="intro-button" type="submit" disabled>Creating Questions - This might take a bit</button>}
      </form>
    </div>
  );
}
