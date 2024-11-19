import React, { useState } from "react";
import Question from "./components/Question";
import Score from "./components/Score";
import "./App.css";

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "Berlin", isCorrect: false },
      { answerText: "Madrid", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Lisbon", isCorrect: false },
    ],
  },
  {
    questionText: "Who is the CEO of Tesla?",
    answerOptions: [
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Larry Page", isCorrect: false },
    ],
  },
  {
    questionText: "What is the largest planet in our solar system?",
    answerOptions: [
      { answerText: "Earth", isCorrect: false },
      { answerText: "Jupiter", isCorrect: true },
      { answerText: "Mars", isCorrect: false },
      { answerText: "Saturn", isCorrect: false },
    ],
  },
  {
    questionText: "Which element has the chemical symbol 'O'?",
    answerOptions: [
      { answerText: "Oxygen", isCorrect: true },
      { answerText: "Gold", isCorrect: false },
      { answerText: "Osmium", isCorrect: false },
      { answerText: "Oganesson", isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
}

export default App;
