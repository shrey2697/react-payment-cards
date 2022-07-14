import React from "react";
import { cardSize } from "../util";

export const SecurityCode = ({ code, size = "lg" }) => (
  <div
    style={{
      display: "flex",
      width: "15rem",
      position: "absolute",
      top: cardSize[size]["securityCode"].top,
      left: cardSize[size]["securityCode"].left,
      alignItems: "center",
    }}
  >
    <div
      className="background-image"
      style={{
        backgroundColor: "#cccccc",
        height: cardSize[size]["securityCode"].height,
        width: cardSize[size]["securityCode"].width,
      }}
    />
    <div
      style={{
        backgroundColor: "#fff",
        height: cardSize[size]["securityCode"].cvvHeight,
        width: cardSize[size]["securityCode"].cvvWidth,
        fontSize: cardSize[size]["securityCode"].size,
        color: "grey",
        display: "flex",
        alignItems: "center",
        fontStyle: "italic",
      }}
    >
      {code}
    </div>
  </div>
);
