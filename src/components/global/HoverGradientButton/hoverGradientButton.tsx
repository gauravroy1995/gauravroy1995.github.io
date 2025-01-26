import React from "react";
import "./hover.css";

export const HoverGradientButton = (props) => {
  const text = props.text || "HOVER ME, THEN CLICK ME!";
  const onClick = props.onClick || (() => {});

  return (
    <button onClick={onClick} className="glow-on-hover" type="button">
      {text}
    </button>
  );
};
