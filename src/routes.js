import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route path="/landing" element={<Home route="/landing" />} />
        <Route path="/" element={<Home route="home" />} />
      </Routes>
    </Router>
  );
};

export default RouterLocal;
