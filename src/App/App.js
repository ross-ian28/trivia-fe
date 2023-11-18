import Intro from "./../Intro/Intro.js";
import Result from "./../Results/Results.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const questionRoutes = [];
for (let i = 1; i < 10; i++) {
  const QuestionComponent = require(`./../Questions/Question${i}.js`).default;
  questionRoutes.push(<Route key={`question-${i}`} path={`/question${i}`} element={<QuestionComponent />} />);
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          {questionRoutes}
          <Route path="/results" element={<Result />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
