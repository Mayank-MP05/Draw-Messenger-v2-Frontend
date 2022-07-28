import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ChatViewExpanededPage from "./pages/chat-expanded";
import ChatViewHomePage from "./pages/chat.page";
import HomePage from "./pages/home.page";
import LandingPage from "./pages/landing.page";
import TestComp from "./components/common/test"

const RouterLocal = ({ isLoggedInHandler }) => {
  console.log(isLoggedInHandler);
  // const [isLoggedIn, setIsLoggedIn] = isLoggedInHandler;
  const isLoggedIn = true
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={isLoggedIn ? <HomePage route="/landing" /> : <LandingPage />}
        />
        <Route path="/group/:id" element={<ChatViewHomePage />} />
        <Route
        path="*"
        element={<Navigate to="/home" replace />}
    />
      </Routes>
    </Router>
  );
};

export default RouterLocal;
