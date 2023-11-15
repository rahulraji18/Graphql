import { useEffect } from "react";

const ToggleButton = () => {
  useEffect(() => {
    console.log("Running");
    return () => {
      console.log("WillDidMount");
    };
    //we can use funcitons 
  }, []);
  return (<h1>ComponentWillUnmount Test</h1>);
};

export default ToggleButton;
