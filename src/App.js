import './App.css';
import Intro from "./Intro.js";
import Question1 from "./Questions/Question1.js";
import Question2 from "./Questions/Question2.js";
import Question3 from "./Questions/Question3.js";
import Question4 from "./Questions/Question4.js";
import Question5 from "./Questions/Question5.js";
import Question6 from "./Questions/Question6.js";
import Question7 from "./Questions/Question7.js";
import Question8 from "./Questions/Question8.js";
import Question9 from "./Questions/Question9.js";
import Question10 from "./Questions/Question10.js";
import Result from "./Results.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/question1" element={<Question1 />}></Route>
          <Route path="/question2" element={<Question2 />}></Route>
          <Route path="/question3" element={<Question3 />}></Route>
          <Route path="/question4" element={<Question4 />}></Route>
          <Route path="/question5" element={<Question5 />}></Route>
          <Route path="/question6" element={<Question6 />}></Route>
          <Route path="/question7" element={<Question7 />}></Route>
          <Route path="/question8" element={<Question8 />}></Route>
          <Route path="/question9" element={<Question9 />}></Route>
          <Route path="/question10" element={<Question10 />}></Route>
          <Route path="/results" element={<Result />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
