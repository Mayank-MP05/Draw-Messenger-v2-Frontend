import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { FirebaseApp } from "./api/firebase.init";
import Navbar from "./components/common/navbar";
import "./index.scss";
import RouterLocal from "./routes";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <Navbar
        isLoggedInHandler={[isLoggedIn, setIsLoggedIn]}
        userHandler={[loggedInUser, setLoggedInUser]}
      />
      <RouterLocal
        isLoggedInHandler={[isLoggedIn, setIsLoggedIn]}
        userHandler={[loggedInUser, setLoggedInUser]}
      />
    </>
  );
};

export default App;
