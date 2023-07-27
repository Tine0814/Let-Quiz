import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizOptionPage from "./pages/QuizOptionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizOptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
