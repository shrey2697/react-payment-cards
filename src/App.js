import React, { useState } from "react";
import { PaymentCard } from "./components/PaymentCard";
import "./App.css";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardValidity, setCardValidity] = useState("");
  const [cardSecurityCode, setCardSecurityCode] = useState("");
  const [focus, setFocus] = useState(false);

  const [cardBgColor, setCardBgColor] = useState("sea");

  const cardDetails = {
    cardType: "Visa",
    cardHolderName: cardHolderName,
    cardValidity: cardValidity,
    cardSecurityCode: cardSecurityCode,
    cardNumber: cardNumber,
  };
  return (
    <div className="app">
      <PaymentCard
        cardDetails={cardDetails}
        flipped={focus}
        cardBgColor={cardBgColor}
      />

      <form style={{ marginTop: "100px" }}>
        <select
          value={cardBgColor}
          onChange={(e) => setCardBgColor(e.target.value)}
        >
          <option>sea</option>
          <option>blood</option>
          <option>night</option>
        </select>
        <input
          type="number"
          placeholder="card number"
          maxLength={16}
          value={cardNumber}
          onChange={(e) =>
            e.target.value.length <= 16 && setCardNumber(e.target.value)
          }
        />
        <input
          placeholder="card holder's name"
          value={cardHolderName}
          onChange={(e) => setCardHolderName(e.target.value)}
        />
        <input
          placeholder="card validity"
          value={cardValidity}
          onChange={(e) =>
            e.target.value.length <= 5 && setCardValidity(e.target.value)
          }
        />
        <input
          placeholder="cvv"
          value={cardSecurityCode}
          onChange={(e) =>
            e.target.value.length <= 3 && setCardSecurityCode(e.target.value)
          }
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </form>
    </div>
  );
}

export default App;
