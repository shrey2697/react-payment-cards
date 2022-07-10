import React from "react";

export const SecurityCode = ({ code }) => (
  <div
    style={{
      display: "flex",
      width: "15rem",
      position: "absolute",
      top: "120px",
      left: "40px",
      alignItems: "center",
    }}
  >
    <div
      className="background-image"
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
        width: "3rem",
        fontSize: 16,
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
