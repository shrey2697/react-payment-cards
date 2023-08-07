import React from "react";
import { Amex } from "../../assets/Amex";
import { Chip } from "../../assets/Chip";
import { Maestro } from "../../assets/Maestro";
import { MC_V } from "../../assets/Mastercard";
import { Rupay } from "../../assets/Rupay";
import { Visa } from "../../assets/Visa";
import { CardDetail } from "../CardDetail/CardDetail";
import { CardLabel } from "../CardLabel/CardLabel";
import { CardNumber } from "../CardNumber";
import { DefaultCardType } from "../DefaultCardType";
import { cardSize } from "../util";

export const CardFront = ({
  getFormattedCardNumber,
  cardType,
  cardHolderName,
  cardValidity,
  cardNumber,
  cardBgColor,
  getBackground,
  size = "lg"
}) => {
  const logoProps = {
    width: cardSize[size]["logoProps"].width,
    height: cardSize[size]["logoProps"].height
  };

  const CARD_TYPE = {
    visa: <Visa {...logoProps} />,
    mastercard: <MC_V {...logoProps} />,
    amex: <Amex {...logoProps} />,
    maestro: <Maestro {...logoProps} />,
    rupay: <Rupay {...logoProps} />
  };

  const renderCardType = (cardType) => {
    return CARD_TYPE[cardType];
  };

  return (
    <div
      className="payment-card-face payment-card-front"
      style={{
        background: getBackground(cardBgColor),
        boxShadow:
          cardBgColor === "glass"
            ? "none"
            : "0px 10px 18px 3px rgba(0, 0, 0, 0.5)"
      }}
    >
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        {renderCardType(cardType.toLowerCase()) || <DefaultCardType />}
      </div>
      <div
        style={{
          marginTop: cardSize[size]["chip"].marginTop,
          marginBottom: cardSize[size]["chip"].marginBottom,
          width: "0px"
        }}
      >
        <Chip
          width={cardSize[size]["chip"].width}
          height={cardSize[size]["chip"].height}
        />
      </div>
      <CardNumber
        getFormattedCardNumber={getFormattedCardNumber}
        cardNumber={cardNumber || "placeholder"}
        size={size}
      />
      <div
        className="card-details-container"
        style={{
          padding: cardSize[size]["cardDetail"].padding
        }}
      >
        <div style={{ textAlign: "left" }}>
          <CardLabel value="Card holder's name" size={size} />
          <CardDetail value={cardHolderName} size={size} />
        </div>

        <div style={{ textAlign: "right" }}>
          <CardLabel value="Valid thru" size={size} />
          <CardDetail value={cardValidity} size={size} />
        </div>
      </div>
    </div>
  );
};
