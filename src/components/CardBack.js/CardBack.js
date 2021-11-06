import React from "react";
import { CardDetail } from "../CardDetail/CardDetail";
import { CardNumber } from "../CardNumber";
import { SecurityCode } from "../SecurityCode";
import "./styles.css";

export const CardBack = ({
  getFormattedCardNumber,
  cardSecurityCode,
  cardNumber,
  cardHolderName,
  cardValidity,
}) => {
  return (
    <div className="payment-card-face payment-card-back">
      <div className="payment-card-strip" />
      <SecurityCode code={cardSecurityCode} />
      <CardNumber
        getFormattedCardNumber={getFormattedCardNumber}
        isBackVisible={true}
        cardNumber={cardNumber}
      />

      <div className="card-details-container">
        <div className="card-holder">
          <CardDetail value={cardHolderName} />
        </div>
        <div className="card-expiry">
          <CardDetail value={cardValidity} />
        </div>
      </div>
    </div>
  );
};
