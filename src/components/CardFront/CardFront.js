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

export const CardFront = ({
  getFormattedCardNumber,
  cardType,
  cardHolderName,
  cardValidity,
  cardNumber,
  cardBgColor,
  getBackground,
}) => {
  const cardProps = { width: "150px", height: "90px" };
  const CARD_TYPE = {
    visa: <Visa {...cardProps} />,
    mastercard: <MC_V {...cardProps} />,
    amex: <Amex {...cardProps} />,
    maestro: <Maestro {...cardProps} />,
    rupay: <Rupay {...cardProps} />,
  };

  const renderCardType = (cardType) => {
    return CARD_TYPE[cardType];
  };

  return (
    <div
      className="payment-card-face payment-card-front"
      style={{ background: getBackground(cardBgColor) }}
    >
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        {renderCardType(cardType.toLowerCase()) || <DefaultCardType />}
      </div>
      <div
        style={{
          marginTop: "15%",
          marginBottom: "5%",
        }}
      >
        <Chip />
      </div>
      <CardNumber
        getFormattedCardNumber={getFormattedCardNumber}
        cardNumber={cardNumber || "placeholder"}
      />
      <div className="card-details-container">
        <div>
          <CardLabel value="Card holder's name" />
          <CardDetail value={cardHolderName} />
        </div>

        <div style={{ textAlign: "right" }}>
          <CardLabel value="Valid thru" />
          <CardDetail value={cardValidity} />
        </div>
      </div>
    </div>
  );
};
