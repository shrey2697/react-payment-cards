"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardDetail = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CardDetail = _ref => {
  let {
    value
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: "grey",
      textShadow: "1px 1px 1px white",
      fontSize: 16,
      width: "100%",
      textAlign: "left",
      textTransform: "uppercase"
    }
  }, value);
};

exports.CardDetail = CardDetail;