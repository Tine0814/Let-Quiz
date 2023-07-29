import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizOptionPage from "./pages/QuizOptionPage";
import NewbieQuizPage from "./pages/NewbieQuizPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizOptionPage />} />
        <Route path="Newbie-Quiz" element={<NewbieQuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
