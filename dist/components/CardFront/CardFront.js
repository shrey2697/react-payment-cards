"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardFront = void 0;

var _react = _interopRequireDefault(require("react"));

var _Amex = require("../../assets/Amex");

var _Chip = require("../../assets/Chip");

var _Maestro = require("../../assets/Maestro");

var _Mastercard = require("../../assets/Mastercard");

var _Rupay = require("../../assets/Rupay");

var _Visa = require("../../assets/Visa");

var _CardDetail = require("../CardDetail/CardDetail");

var _CardLabel = require("../CardLabel/CardLabel");

var _CardNumber = require("../CardNumber");

var _DefaultCardType = require("../DefaultCardType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CardFront = _ref => {
  let {
    getFormattedCardNumber,
    cardType,
    cardHolderName,
    cardValidity,
    cardNumber,
    cardBgColor,
    getBackground
  } = _ref;
  const cardProps = {
    width: "150px",
    height: "90px"
  };
  const CARD_TYPE = {
    visa: /*#__PURE__*/_react.default.createElement(_Visa.Visa, cardProps),
    mastercard: /*#__PURE__*/_react.default.createElement(_Mastercard.MC_V, cardProps),
    amex: /*#__PURE__*/_react.default.createElement(_Amex.Amex, cardProps),
    maestro: /*#__PURE__*/_react.default.createElement(_Maestro.Maestro, cardProps),
    rupay: /*#__PURE__*/_react.default.createElement(_Rupay.Rupay, cardProps)
  };

  const renderCardType = cardType => {
    return CARD_TYPE[cardType];
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "payment-card-face payment-card-front",
    style: {
      background: getBackground(cardBgColor)
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0
    }
  }, renderCardType(cardType.toLowerCase()) || /*#__PURE__*/_react.default.createElement(_DefaultCardType.DefaultCardType, null)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: "4rem",
      marginBottom: "2rem",
      width: "0px"
    }
  }, /*#__PURE__*/_react.default.createElement(_Chip.Chip, null)), /*#__PURE__*/_react.default.createElement(_CardNumber.CardNumber, {
    getFormattedCardNumber: getFormattedCardNumber,
    cardNumber: cardNumber || "placeholder"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-details-container"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_CardLabel.CardLabel, {
    value: "Card holder's name"
  }), /*#__PURE__*/_react.default.createElement(_CardDetail.CardDetail, {
    value: cardHolderName
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/_react.default.createElement(_CardLabel.CardLabel, {
    value: "Valid thru"
  }), /*#__PURE__*/_react.default.createElement(_CardDetail.CardDetail, {
    value: cardValidity
  }))));
};

exports.CardFront = CardFront;