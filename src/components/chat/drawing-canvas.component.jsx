import React, { useState } from "react";
import { SketchPicker, CirclePicker } from "react-color";
import ColorPickerComponent from "./color-picker.component";
import CanvasDraw from "react-canvas-draw";

const DrawingCanvasComponent = () => {
  const [colorSelected, setcolorSelected] = useState("#3f51b5");
  const [saveableCanvas, setSaveableCanvas] = useState(null);
  const handleColorChange = (color) => {
    setcolorSelected(color.hex);
  };
  return (
    <div className="h-40 w-full flex flex-row bg-white rounded-lg border-2 shadow-lg p-2">
      <div className="flex flex-col">
        <h5>Choose the Color:</h5>
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
      <div className="flex flex-col">
        <CanvasDraw
          ref={(canvasDraw) => setSaveableCanvas(canvasDraw)}
          onChange={(e) => console.log(e)}
          brushColor={colorSelected}
          canvasWidth={400}
          canvasHeight={400}
        />
      </div>
      <div className="flex flex-col btn-group justify-center items-center mx-auto">
        <button
          onClick={() => {
            localStorage.setItem("savedDrawing", saveableCanvas.getSaveData());
          }}
        >
          Save
        </button>
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
