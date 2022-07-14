# Getting Started with React Payment Cards

React Payment Cards is a beautiful React component that creates a virtual avatar of your credit/debit card to enhance the user experience.

## Installation

`npm install react-payment-cards`

## Usage

```js
const cardDetails = {
  cardHolderName: "Rahul Singh",
  cardValidity: "02/12",
  cardSecurityCode: "776",
  cardNumber: "4121212551525126",
};

<PaymentCard
  cardDetails={cardDetails}
  flipped={false} // Pass `true` to see the back of the card on first load
  cardBgColor="sea" // sea | blood | night
  size="lg" // sm | md | lg
/>;
```

![React Payment Cards](src/demo/RPCdemo.png)
![React Payment Cards Medium](src/demo/RPCdemoMd.png)
![React Payment Cards Small](src/demo/RPCdemoSm.png)

Refer to `FullExample.js` for complete implementation

## Demo

https://codesandbox.io/s/react-payment-cards-xye6zb

## Contributing

Create a `feature` or `fix` branch based on your contribution and then create a pull request.
