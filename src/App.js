import "./App.css";
import { PaymentCard } from "./components/PaymentCard";

function App() {
  const cardDetails = {
    cardType: "mastercard",
    cardHolderName: "Shrey Tiwari",
    cardValidity: "03/29",
    cardSecurityCode: "122",
    cardNumber: "6271312009961871",
  };
  return (
    <div className="app">
      <PaymentCard cardDetails={cardDetails} />
    </div>
  );
}

export default App;
