import React, { memo, useRef } from "react";

const Counter = ({increment}) => {
   const ref = useRef(0)
   console.log('ref',ref.current++)
//   console.log("Counter");
  return (
    <center>
      <button onClick={increment}>Increment</button>
    </center>
  );
};

export default memo(Counter);
