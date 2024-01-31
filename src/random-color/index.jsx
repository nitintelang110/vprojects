import { useEffect, useState } from "react";
import './randomColor.css'

export const RandomColor=()=> {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "85vh",
        background: color,
      }}
    >
      <button className="btn_buttons" onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button className="btn_buttons" onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button className="btn_buttons"
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div id="result_text">
        <h3 className="res_text">{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1 id="res_text" className="res_text">{color}</h1>
      </div>
    </div>
  );
}
