import React from "react";

export const CardNumber = ({
  getFormattedCardNumber,
  isBackVisible,
  cardNumber,
}) => {
  return (
    <div
      style={{
        color: "grey",
        textShadow: "1px 1px 1px white",
        fontSize: 22,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        visibility: cardNumber === "placeholder" && "hidden",
        letterSpacing: "12px",
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
