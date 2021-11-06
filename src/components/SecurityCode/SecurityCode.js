import React from "react";

export const SecurityCode = ({ code }) => (
  <div
    style={{
      display: "flex",
      width: "50%",
      position: "absolute",
      top: "120px",
      left: "40px",
      alignItems: "center",
    }}
  >
    <div
      style={{
        backgroundColor: "#cccccc",
        height: "40px",
        width: "80%",
      }}
    />
    <div
      style={{
        backgroundColor: "#fff",
        height: "30px",
        width: "20%",
        color: "grey",
        display: "flex",
        alignItems: "center",
        fontStyle: "italic",
      }}
    >
      {code}
    </div>
  </div>
);
