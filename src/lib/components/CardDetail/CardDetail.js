import React from "react";
import { cardSize } from "../util";

export const CardDetail = ({ value, size = "lg" }) => {
  return (
    <div
      style={{
        color: "grey",
        textShadow: "1px 1px 1px white",
        fontSize: cardSize[size]["cardDetail"].size,
        width: "100%",
        textTransform: "uppercase",
      }}
    >
      {value}
    </div>
  );
};
