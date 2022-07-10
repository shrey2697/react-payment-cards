"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardBack = void 0;

var _react = _interopRequireDefault(require("react"));

var _CardDetail = require("../CardDetail/CardDetail");

var _CardNumber = require("../CardNumber");

var _SecurityCode = require("../SecurityCode");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CardBack = _ref => {
  let {
    getFormattedCardNumber,
    cardSecurityCode,
    cardNumber,
    cardHolderName,
    cardValidity,
    cardBgColor,
    getBackground
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "payment-card-face payment-card-back",
    style: {
      background: getBackground(cardBgColor)
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "payment-card-strip"
  }), /*#__PURE__*/_react.default.createElement(_SecurityCode.SecurityCode, {
    code: cardSecurityCode
  }), /*#__PURE__*/_react.default.createElement(_CardNumber.CardNumber, {
    getFormattedCardNumber: getFormattedCardNumber,
    isBackVisible: true,
    cardNumber: cardNumber
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-details-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-holder"
  }, /*#__PURE__*/_react.default.createElement(_CardDetail.CardDetail, {
    value: cardHolderName
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-expiry"
  }, /*#__PURE__*/_react.default.createElement(_CardDetail.CardDetail, {
    value: cardValidity
  }))));
};

exports.CardBack = CardBack;