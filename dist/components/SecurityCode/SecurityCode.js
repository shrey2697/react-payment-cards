"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecurityCode = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SecurityCode = _ref => {
  let {
    code
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      width: "15rem",
      position: "absolute",
      top: "120px",
      left: "40px",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "background-image",
    style: {
      backgroundColor: "#cccccc",
      height: "40px",
      width: "80%"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#fff",
      height: "30px",
      width: "3rem",
      fontSize: 16,
      color: "grey",
      display: "flex",
      alignItems: "center",
      fontStyle: "italic"
    }
  }, code));
};

exports.SecurityCode = SecurityCode;