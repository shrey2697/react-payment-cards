import React from "react";

export const CardLabel = ({ value }) => (
  <div
    style={{
      color: "white",
      fontSize: 8,
      textTransform: "uppercase",
      marginBottom: 2,
    }}
  >
    {value}
  </div>
);
