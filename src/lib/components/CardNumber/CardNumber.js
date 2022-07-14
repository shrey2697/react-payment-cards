import React from "react";
import { cardSize } from "../util";

export const CardNumber = ({
  getFormattedCardNumber,
  isBackVisible,
  cardNumber,
  size = "lg",
}) => {
  return (
    <div
      style={{
        color: "grey",
        textShadow: "1px 1px 1px white",
        fontSize: cardSize[size].cardNumberSize,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        visibility: cardNumber === "placeholder" && "hidden",
        letterSpacing: cardSize[size].cardNumberSpacing,
        ...(isBackVisible && {
          transform: "scale(-1, 1)",
          position: "absolute",
          bottom: "30%",
          opacity: "0.2",
        }),
      }}
    >
      {getFormattedCardNumber(cardNumber)}
    </div>
  );
};
