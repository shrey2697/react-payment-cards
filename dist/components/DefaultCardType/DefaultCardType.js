"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultCardType = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DefaultCardType = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "default-card-type"
  }, " React Payment Cards");
};

exports.DefaultCardType = DefaultCardType;