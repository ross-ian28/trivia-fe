import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { getQuestions } from "./Intro.js";
import "./Questions.css"

export default function Question1(props) {
  const location = useLocation();
  const navigate = useNavigate();
  // Set questions equal to Import intro questions method
  const searchParams = new URLSearchParams(location.search);
  const [questions, setQuestions] = useState(JSON.parse(searchParams.get("data")));
  const [question, setQuestion] = useState(1);
  const [questionNum, setQuestionNum] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [nextButton, setNextButton] = useState(false);

  useEffect(() => {
    // Refactor line 
    const currentQuestion = questions.questions[0];
    const answers = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer);
    if (currentQuestion.correct_answer === "True" || currentQuestion.correct_answer === "False") {
      setQuestion({ ...currentQuestion, answers: ["True", "False"] });
    } else {
      const shuffledAnswers = shuffle(answers);
      setQuestion({ ...currentQuestion, answers: shuffledAnswers });
    }
  }, []);

  function loadQuestions() {
    getQuestions();
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedAnswer === question.correct_answer) {
      setResultMessage('You got it right!');
      setQuestions((prevQuestions) => ({
        ...prevQuestions,
        score: prevQuestions.score + 1,
      }));
    } else {
      setResultMessage(
        `Sorry, that was incorrect. The correct answer was ${question.correct_answer}`
      );
    }
    setNextButton(true);
  };


  function handleNext() {
    setQuestionNum(questionNum += 1);
    navigate(`/question${questionNum}`)
  }
  // Add 1 to `/question{questionNumber}` everytime next button is clicked

  return (
    <div className="question-container">
      <h1>Question {questionNum}/10</h1>
      <h2>{question.question}</h2>
      <div className="form-container">
      <form onSubmit={handleSubmit}>
        {question.answers && question.answers.map((answer) => (
          <div key={answer}>
            <label>
              <input
                type="radio"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={(event) => setSelectedAnswer(event.target.value)}
              />
              {answer}
            </label>
          </div>
        ))}
        { !nextButton && <button className="question-button" type="submit">Submit</button> }
      </form>
       <div className="next-button-container">
          { nextButton && <button className="question-button" onClick={handleNext}>Next Question</button>}
      </div></div>
      <p>{resultMessage}</p>
    </div>
  );
};
