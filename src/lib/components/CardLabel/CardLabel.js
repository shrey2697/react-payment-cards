import React from "react";
import { cardSize } from "../util";

export const CardLabel = ({ value, size }) => (
  <div
    style={{
      color: "white",
      fontSize: cardSize[size]["cardLabel"].size,
      textTransform: "uppercase",
      marginBottom: cardSize[size]["cardLabel"].marginBottom,
    }}
  >
    {value}
  </div>
);
