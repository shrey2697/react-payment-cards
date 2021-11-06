import React from "react";

export const CardDetail = ({ value }) => {
  return (
    <div
      style={{
        color: "grey",
        textShadow: "1px 1px 1px white",
        fontSize: 16,
        width: "100%",
        textTransform: "uppercase",
      }}
    >
      {value}
    </div>
  );
};
