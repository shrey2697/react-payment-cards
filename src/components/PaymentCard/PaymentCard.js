import React, { useState } from "react";

import { CardBack } from "../CardBack.js";
import { CardFront } from "../CardFront/CardFront";

import "./styles.css";

export const PaymentCard = ({ cardDetails }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const {
    cardNumber,
    cardHolderName,
    cardSecurityCode,
    cardType,
    cardValidity,
  } = cardDetails;
  const getFormattedCardNumber = (number) => {
    return number?.toString().replace(/\d{4}(?=.)/g, "$& ");
  };

  return (
    <div className="payment-card-container">
      <div
        className={`payment-card ${isFlipped && "flipcard"}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <CardFront
          getFormattedCardNumber={getFormattedCardNumber}
          cardType={cardType}
          cardHolderName={cardHolderName}
          cardValidity={cardValidity}
          cardNumber={cardNumber}
        />
        <CardBack
          getFormattedCardNumber={getFormattedCardNumber}
          cardSecurityCode={cardSecurityCode}
          cardNumber={cardNumber}
          cardHolderName={cardHolderName}
          cardValidity={cardValidity}
        />
      </div>
    </div>
  );
};
