import React from "react";
import { CardDetail } from "../CardDetail/CardDetail";
import { CardNumber } from "../CardNumber";
import { SecurityCode } from "../SecurityCode";
import { cardSize } from "../util";
import "./styles.css";

export const CardBack = ({
  getFormattedCardNumber,
  cardSecurityCode,
  cardNumber,
  cardHolderName,
  cardValidity,
  cardBgColor,
  getBackground,
  size = "lg"
}) => {
  return (
    <div
      className="payment-card-face payment-card-back"
      style={{
        background: getBackground(cardBgColor),
        boxShadow:
          cardBgColor === "glass"
            ? "none"
            : "0px 10px 18px 3px rgba(0, 0, 0, 0.5)"
      }}
    >
      <div
        className="payment-card-strip"
        style={{
          height: cardSize[size]["strip"]
        }}
      />
      <SecurityCode code={cardSecurityCode} size={size} />
      <CardNumber
        getFormattedCardNumber={getFormattedCardNumber}
        isBackVisible={true}
        cardNumber={cardNumber}
        size={size}
      />

      <div
        className="card-details-container"
        style={{
          padding: cardSize[size]["cardDetail"].padding
        }}
      >
        <div className="card-holder">
          <CardDetail value={cardHolderName} size={size} />
        </div>
        <div className="card-expiry">
          <CardDetail value={cardValidity} size={size} />
        </div>
      </div>
    </div>
  );
};
