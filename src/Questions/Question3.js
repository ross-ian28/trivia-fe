import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export default function Question3(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [questions, setQuestions] = useState(JSON.parse(searchParams.get("data")));
  const [question, setQuestion] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [nextButton, setNextButton] = useState(false);

  useEffect(() => {
    const currentQuestion = questions.questions[2];
    const answers = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer);
    const shuffledAnswers = shuffle(answers);
    setQuestion({ ...currentQuestion, answers: shuffledAnswers });
  }, []);

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
      setResultMessage(`Sorry, that was incorrect. The correct answer was ${question.correct_answer}`);
    }
    setNextButton(true);
  };

  const handleNext = (event) => {
    const params = new URLSearchParams({
      data: JSON.stringify(questions)
    });
    navigate(`/question4?${params}`);
  }

  return (
    <div>
      <h1>Question 3/10</h1>
      <h2>{question.question}</h2>
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
        { !nextButton && <button type="submit">Submit</button> }
      </form>
       { nextButton && <button className="button" onClick={handleNext}>Next Question</button>}
      <p>{resultMessage}</p>
    </div>
  );
}
