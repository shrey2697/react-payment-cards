"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardLabel = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CardLabel = _ref => {
  let {
    value
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: "white",
      fontSize: 12,
      textTransform: "uppercase",
      marginBottom: 5
    }
  }, value);
};

exports.CardLabel = CardLabel;