import React, { useEffect, useRef, useState } from "react";

import { CardBack } from "../CardBack.js";
import { CardFront } from "../CardFront/CardFront";

import "./styles.css";

export const PaymentCard = ({ cardDetails, flipped, cardBgColor }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    setIsFlipped(flipped);
  }, [flipped]);
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
  const getBackground = (bgColor) => {
    switch (bgColor) {
      case "blood":
        return "linear-gradient(30deg, #5e0000 0%, #860000 25%, #ad0000 50%, #ad0000 75%)";
      case "night":
        return "linear-gradient(30deg, #020202 0%, #1d1d1d 25%, #3f3f3f 50%, #5a5a5a 75%)";
      case "sea":
        return "linear-gradient(to right, #06121e 0%, #0b1827 25%, #112334 50%, #17293c 75%)";
      default:
        return "linear-gradient(to right, #06121e 0%, #0b1827 25%, #112334 50%, #17293c 75%)";
    }
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
          getBackground={getBackground}
          cardBgColor={cardBgColor}
        />
        <CardBack
          getFormattedCardNumber={getFormattedCardNumber}
          cardSecurityCode={cardSecurityCode}
          cardNumber={cardNumber}
          cardHolderName={cardHolderName}
          cardValidity={cardValidity}
          getBackground={getBackground}
          cardBgColor={cardBgColor}
        />
      </div>
    </div>
  );
};
