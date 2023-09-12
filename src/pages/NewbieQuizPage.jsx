import React, { useState, useEffect } from "react";
import ViewLevelComponent from "../components/ViewLevelComponent";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/button/ButtonComponent";
import CongratsComponent from "../components/CongratsComponent";

const NewbieQuizPage = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);
  const [countdown, setCountdown] = useState(10);

  const CheckCorrect = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setScore(score);
    }
    setTimeout(() => {
      setQuestion(question + 1);
      setCountdown(10);
    }, 1000);
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      CheckCorrect(false);
    }
  }, [countdown, question]);

  const questions = [
    {
      questionNumber: "Question 1",
      question: "Inside which HTML element do we put the JavaScript?",
      A: [`A. <script>`, true],
      B: ["B. <javascript>", false],
      C: ["C. <footer>", false],
    },
    {
      questionNumber: "Question 2",
      question: `Where is the correct place to insert a JavaScript?`,
      A: [
        `A. Both the <head> section and the <body> section are correct`,
        true,
      ],
      B: ["B. The <body> section", false],
      C: ["C. The <head> section", false],
    },
    {
      questionNumber: "Question 3",
      question: `What is the correct syntax for referring to an external script called "index.js"?`,
      A: [`A. <script href="index.js">`, false],
      B: [`B. <script name="index.js">`, false],
      C: [`C. <script src="index.js">`, true],
    },
    {
      questionNumber: "Question 4",
      question: `What is the correct syntax for referring to an external script called "index.js"?`,
      A: [`A. <script href="index.js">`, false],
      B: [`B. <script name="xxx.js">`, false],
      C: [`C. <script src="index.js">`, true],
    },
  ];

  return (
    <>
      {question < questions.length ? (
        <ViewLevelComponent
          countdown={
            <div className="text-black flex justify-center">
              <div className="shadow-lg text-center py-3 font-bold bg-white h-[50px] w-[50px] rounded-full">
                {countdown}
              </div>
            </div>
          }
          background="bg-gradient-to-r from-[#eec746] to-[#d7cc52]"
          level="Level 1"
          title={questions[question].questionNumber}
          description={questions[question].question}
          onClick={() => navigate("/")}
          button={
            <div className="w-full flex flex-col">
              <ButtonComponent
                background="bg-clip-text bg-gradient-to-r from-[#eec746] to-[#d7cc52]"
                label={questions[question].A[0]}
                onClick={() => CheckCorrect(questions[question].A[1])}
                className="text-left"
              />
              <ButtonComponent
                background="bg-clip-text bg-gradient-to-r from-[#eec746] to-[#d7cc52]"
                label={questions[question].B[0]}
                onClick={() => CheckCorrect(questions[question].B[1])}
                className=" text-left"
              />
              <ButtonComponent
                background="bg-clip-text bg-gradient-to-r from-[#eec746] to-[#d7cc52]"
                label={questions[question].C[0]}
                onClick={() => CheckCorrect(questions[question].C[1])}
                className=" text-left"
              />
            </div>
          }
        />
      ) : (
        <CongratsComponent score={score} />
      )}
    </>
  );
};

export default NewbieQuizPage;
