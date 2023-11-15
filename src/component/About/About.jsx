import React from "react";
import Button from "../Button/Button";
import { checkButton } from "../../utils";

const About = () => {
  return (
    <div>
      <h1>About component</h1>
      <Button className="fa-solid fa-trash" onClick={checkButton()}>
        Click
      </Button>
    </div>
  );
};

export default About;
