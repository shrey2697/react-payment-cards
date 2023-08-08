import React, { useEffect, useState } from "react";

import { CardBack } from "../CardBack.js";
import { CardFront } from "../CardFront/CardFront";
import { cardSize } from "../util.js";

import "./styles.css";

export const PaymentCard = ({
  cardDetails,
  flipped,
  cardBgColor,
  size = "lg"
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardType, setCardType] = useState("default");
  const defaultCardDetails = {
    cardHolderName: "",
    cardSecurityCode: "",
    cardNumber: "",
    cardValidity: ""
  };
  useEffect(() => {
    setIsFlipped(flipped);
  }, [flipped]);
  const { cardHolderName, cardSecurityCode, cardNumber, cardValidity } =
    cardDetails || defaultCardDetails;
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
      case "glass":
        return "rgba(255,255,255,0.15)";
      default:
        return "linear-gradient(to right, #06121e 0%, #0b1827 25%, #112334 50%, #17293c 75%)";
    }
  };

  useEffect(() => {
    getCardType(cardNumber);
  }, [cardNumber]);

  const getCardType = (num) => {
    if (num.startsWith(4)) {
      setCardType("visa");
    } else if (num.startsWith(5)) {
      setCardType("mastercard");
    } else if (num.startsWith(67)) {
      setCardType("maestro");
    } else if (num.startsWith(34)) {
      setCardType("amex");
    } else if (num.startsWith(60) || num.startsWith(6521)) {
      setCardType("rupay");
    } else {
      setCardType("default");
    }
  };

  return (
    <div
      className="payment-card-container"
      style={{
        width: cardSize[size]["card"].width,
        height: cardSize[size]["card"].height
      }}
    >
      <div
        className={`payment-card ${isFlipped && "flipcard"}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <CardFront
          getFormattedCardNumber={getFormattedCardNumber}
          cardType={cardType || ""}
          cardHolderName={cardHolderName || ""}
          cardValidity={cardValidity || ""}
          cardNumber={cardNumber || ""}
          getBackground={getBackground}
          cardBgColor={cardBgColor}
          size={size}
        />
        <CardBack
          getFormattedCardNumber={getFormattedCardNumber}
          cardSecurityCode={cardSecurityCode}
          cardNumber={cardNumber}
          cardHolderName={cardHolderName}
          cardValidity={cardValidity}
          getBackground={getBackground}
          cardBgColor={cardBgColor}
          size={size}
        />
      </div>
    </div>
  );
};
