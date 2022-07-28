import { useState, useEffect } from "react";
import "./index.scss";
import RouterLocal from "./routes";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <RouterLocal isLoggedInHandler={[isLoggedIn,setIsLoggedIn]}/>
    </>
  );
};

export default App;
