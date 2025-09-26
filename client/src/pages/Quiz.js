
import React, { useState, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import coursesData from "../utils/coursesData";

function Quiz({ user, updateUser }) {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const moduleId = queryParams.get("module");
  const courseId = location.pathname.split("/")[2];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const timerRef = useRef(null);


  // ✅ Load questions properly (module-level quiz or course-level)

  useEffect(() => {
    const course = coursesData.find(c => c.id === courseId);
    if (course) {
      let moduleQuestions = [];
      if (moduleId) {
        const module = course.modules.find(m => m.id === moduleId);
        moduleQuestions = module?.quiz || [];
      } else {

        // If no module specified, include all module quizzes
        moduleQuestions = course.modules.flatMap(m => m.quiz || []);

      }
      setQuestions(moduleQuestions);
    }
  }, [courseId, moduleId]);

  // ✅ Timer logic
  useEffect(() => {
    if (!quizCompleted && questions.length > 0) {
      setTimeLeft(30);
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleAnswer(null);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [currentQuestion, quizCompleted, questions]);

  const handleAnswer = (option) => {
    clearInterval(timerRef.current);


    if (option && option === questions[currentQuestion].options[questions[currentQuestion].answer]) {

      setScore(prev => prev + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      {!quizCompleted ? (
        <>
          <h2 className="quiz-title">Quick Knowledge Check</h2>
          <div className="quiz-card">
            <p className="question">
              {questions[currentQuestion]?.question}
            </p>
            <div className="options">
              {questions[currentQuestion]?.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="option-btn"
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="timer">⏳ {timeLeft}s</p>
          </div>
        </>
      ) : (
        <div className="quiz-results">
          <h2>Quiz Completed 🎉</h2>
          <p>
            You scored {score} out of {questions.length}
          </p>
          <button onClick={() => history.push(`/courses/${courseId}`)}>
            Back to Course
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;







