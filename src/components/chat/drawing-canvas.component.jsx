import React, { useState } from "react";
import { SketchPicker, CirclePicker } from "react-color";
import ColorPickerComponent from "./color-picker.component";
import CanvasDraw from "react-canvas-draw";
// import InputRange from "react-input-range";
import { RangeStepInput } from "react-range-step-input";
const DrawingCanvasComponent = ({ drawingSendBtnClickHandler }) => {
  const [colorSelected, setColorSelected] = useState("#3f51b5");
  const [brushRadius, setBrushRadius] = useState(5);
  const [saveableCanvas, setSaveableCanvas] = useState(null);

  const handleColorChange = (color) => {
    setColorSelected(color.hex);
  };

  const sendBtnClickHandler = () => {
    if (drawingSendBtnClickHandler)
      drawingSendBtnClickHandler(saveableCanvas.getDataURL());
    saveableCanvas.eraseAll();
  };
  
  return (
    <div className="h-40 w-full flex flex-row bg-white rounded-lg border-2 shadow-lg p-2">
      <div className="flex flex-col hidden md:block">
        <h5 className="text-sm font-bold p-1 md:flex flex-row w-full">
          Brush Color
        </h5>
        <CirclePicker
          width={`150px`}
          colors={[
            "#f44336",
            "#e91e63",
            "#9c27b0",
            "#673ab7",
            "#3f51b5",
            "#2196f3",
            "#03a9f4",
            "#00bcd4",
            "#009688",
          ]}
          color={colorSelected}
          onChangeComplete={handleColorChange}
        />
      </div>
      <div className="flex flex-col md:hidden block items-center justify-center">
        <CirclePicker
          width={`50px`}
          colors={["#f44336", "#009688", "#FFFF00"]}
          color={colorSelected}
          onChangeComplete={handleColorChange}
        />
      </div>
      <div className="flex flex-col hidden md:block">
        <CanvasDraw
          ref={(canvasDraw) => setSaveableCanvas(canvasDraw)}
          //   onChange={(e) => console.log(e)}
          brushColor={colorSelected}
          brushRadius={+brushRadius}
          canvasWidth={400}
          canvasHeight={150}
        />
      </div>{" "}
      <div className="flex flex-col md:hidden block">
        <CanvasDraw
          ref={(canvasDraw) => setSaveableCanvas(canvasDraw)}
          //   onChange={(e) => console.log(e)}
          brushColor={colorSelected}
          brushRadius={+brushRadius}
          canvasWidth={175}
          canvasHeight={125}
        />
      </div>
      <div className="flex flex-col btn-group justify-center items-center mx-auto">
        <h5 className="text-sm font-bold p-1 hidden md:flex flex-row w-full">
          Brush Size
        </h5>
        <RangeStepInput
          className="w-6/12 md:w-full m-auto"
          max={"25"}
          min={"2"}
          value={`${brushRadius}`}
          onChange={(e) => setBrushRadius(e.target.value)}
        />
        <button onClick={sendBtnClickHandler}>Send</button>
        <button
          onClick={() => {
            saveableCanvas.eraseAll();
          }}
        >
          Erase
        </button>
        <button
          onClick={() => {
            saveableCanvas.undo();
          }}
        >
          Undo
        </button>
        {/* <button
          onClick={() => {
            console.log(saveableCanvas.getDataURL());
            alert("DataURL written to console");
          }}
        >
          GetDataURL
        </button> */}
      </div>
    </div>
  );
};

export default DrawingCanvasComponent;
