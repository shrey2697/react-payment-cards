import React from "react";

export const CardLabel = ({ value }) => (
  <div
    style={{
      color: "white",
      fontSize: 12,
      textTransform: "uppercase",
      marginBottom: 5,
    }}
  >
    {value}
  </div>
);
