import React from "react";

interface IArrowProps {
  angle?: "up" | "down" | "left" | "right";
  className?: string;
}

const Arrow = ({ angle = "up", className = "" }: IArrowProps) => (
  <div className={` arrow-custom-${angle} ${className}`}></div>
);

export default Arrow;
