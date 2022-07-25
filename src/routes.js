import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestComp from "./components/test";
function Home({ route }) {
  return (
    <div>
      <h1>Route: {route}</h1>
    </div>
  );
}
const RouterLocal = () => {
  return (
    <Router>
      <Routes>0
        <Route path="/landing" element={<Home route="/landing" />} />
        <Route path="/test" element={<TestComp />} />
        <Route path="/" element={<Home route="home" />} />
      </Routes>
    </Router>
  );
};

export default RouterLocal;
