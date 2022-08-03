import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { FirebaseApp } from "./api/firebase.init";
import "./index.scss";
import RouterLocal from "./routes";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <RouterLocal isLoggedInHandler={[isLoggedIn, setIsLoggedIn]} />
    </>
  );
};

export default App;
