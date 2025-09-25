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
  const [showAnswers, setShowAnswers] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const course = coursesData.find(c => c.id === courseId);
    if (course) {
      let courseQuestions = [];
      if (moduleId) {
        const module = course.modules.find(m => m.id === moduleId);
        courseQuestions = module?.content?.quiz || [];
      } else {
        courseQuestions = course.modules.flatMap(m => m.content?.quiz || []);
      }
      setQuestions(courseQuestions);
    }
  }, [courseId, moduleId]);

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
    const correctAnswer = questions[currentQuestion]?.answer;
    if (option === correctAnswer) setScore(prev => prev + 1);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowAnswers(true);
      setQuizCompleted(true);
      const pointsEarned = score * 10 + (option === correctAnswer ? 10 : 0);

      // Ensure achievements are initialized
      const achievements = user?.achievements || {};
      if (!achievements.quizMaster && pointsEarned === questions.length * 10) achievements.quizMaster = true;

      updateUser({
        ...user,
        points: (user.points || 0) + pointsEarned,
        achievements
      });
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowAnswers(false);
    setQuizCompleted(false);
  };

  if (!questions.length) return <div className="container"><p>Loading quiz...</p></div>;

  return (
    <div className="container card" style={{ padding:20 }}>
      <h2>Quiz</h2>
      {!showAnswers ? (
        <>
          <p>Question {currentQuestion + 1} of {questions.length}</p>
          <p>Time Left: {timeLeft}s</p>
          <h3>{questions[currentQuestion].question}</h3>
          <div className="quiz-options" style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {questions[currentQuestion].options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(opt)} className="btn-light">
                {opt}
              </button>
            ))}
          </div>
          <p>Score: {score}</p>
        </>
      ) : (
        <>
          <h3>Quiz Completed!</h3>
          <p>Your Score: {score} / {questions.length}</p>
          <h4>Correct Answers:</h4>
          <ul>
            {questions.map((q, i) => (
              <li key={i}><strong>{q.question}</strong>: {q.answer}</li>
            ))}
          </ul>
          <button className="btn-primary" onClick={handleRetake}>Retake Quiz</button>
          <button className="btn-light" onClick={() => history.push("/leaderboard")} style={{ marginLeft:12 }}>View Leaderboard</button>
        </>
      )}
    </div>
  );
}

export default Quiz;