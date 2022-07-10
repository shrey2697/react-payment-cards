"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentCard = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.string.starts-with.js");

var _react = _interopRequireWildcard(require("react"));

var _CardBack = require("../CardBack.js");

var _CardFront = require("../CardFront/CardFront");

require("./styles.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PaymentCard = _ref => {
  let {
    cardDetails,
    flipped,
    cardBgColor
  } = _ref;
  const [isFlipped, setIsFlipped] = (0, _react.useState)(false);
  const [cardType, setCardType] = (0, _react.useState)("default");
  (0, _react.useEffect)(() => {
    setIsFlipped(flipped);
  }, [flipped]);
  const {
    cardHolderName,
    cardSecurityCode,
    cardNumber,
    cardValidity
  } = cardDetails;

  const getFormattedCardNumber = number => {
    return number === null || number === void 0 ? void 0 : number.toString().replace(/\d{4}(?=.)/g, "$& ");
  };

  const getBackground = bgColor => {
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

  (0, _react.useEffect)(() => {
    getCardType(cardNumber);
  }, [cardNumber]);

  const getCardType = num => {
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

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "payment-card-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "payment-card ".concat(isFlipped && "flipcard"),
    onClick: () => setIsFlipped(!isFlipped)
  }, /*#__PURE__*/_react.default.createElement(_CardFront.CardFront, {
    getFormattedCardNumber: getFormattedCardNumber,
    cardType: cardType,
    cardHolderName: cardHolderName,
    cardValidity: cardValidity,
    cardNumber: cardNumber,
    getBackground: getBackground,
    cardBgColor: cardBgColor
  }), /*#__PURE__*/_react.default.createElement(_CardBack.CardBack, {
    getFormattedCardNumber: getFormattedCardNumber,
    cardSecurityCode: cardSecurityCode,
    cardNumber: cardNumber,
    cardHolderName: cardHolderName,
    cardValidity: cardValidity,
    getBackground: getBackground,
    cardBgColor: cardBgColor
  })));
};

exports.PaymentCard = PaymentCard;