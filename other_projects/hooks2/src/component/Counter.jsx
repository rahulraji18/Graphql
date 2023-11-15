import React, { memo } from "react";

const Counter = () => {
  console.log("Child Component");
  return (
    <center>
      <h3>Child Component</h3>
    </center>
  );
};

export default memo(Counter);
