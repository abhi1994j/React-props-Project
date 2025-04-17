import React from "react";
import Cards from "./Cards";

const colors = [
  { colorName: "Red", colorCode: "#FF0000" },
  { colorName: "Green", colorCode: "#00FF00" },
  { colorName: "Blue", colorCode: "#0000FF" },
  { colorName: "Yellow", colorCode: "#FFFF00" },
  { colorName: "Orange", colorCode: "#FFA500" },
  { colorName: "Purple", colorCode: "#800080" },
  { colorName: "Black", colorCode: "#000000" },
  { colorName: "White", colorCode: "#FFFFFF" },
];

const Project_1 = () => {
  return (
    <div className="p-6 w-[100%] min-h-screen mt-10">
      <div className="flex flex-wrap items-center h-full w-full gap-2 m-2">
        {colors.map((color, index) => (
           <Cards key={index} title={color.colorName} code={color.colorCode} />
        ))}
      </div>
    </div>
  );
};

export default Project_1;
