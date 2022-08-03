import React from "react";
import CanvasDraw from "react-canvas-draw";
const TestComp = () => {
  const changeHandler = e => console.log(e)

  return <CanvasDraw loadTimeOffset={10} onChange={changeHandler}/>;
};

export default TestComp;
