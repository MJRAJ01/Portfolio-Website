import React from "react";
import { Spring } from "react-spring/renderprops";
import Typing from "react-typing-animation";

export default function Component1() {
  var today = new Date();
  var curHr = today.getHours();
  var greeting = "";
  if (curHr < 12) {
    console.log = "good morning";
    greeting = "Good morning!";
  } else if (curHr < 18) {
    console.log("good afternoon");
    greeting = "Good afternoon!";
  } else {
    console.log("good evening");
    greeting = "Good evening!";
  }

  return (
    <Spring
      from={{ opacity: 1, marginTop: -500 }}
      to={{ opacity: 1, marginTop: -40 }}
    >
      {(props) => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Mark Raj</h1>
            <Typing speed={50}>
              {greeting} Check out the sticky notes below for more info about me
              and some projects I've done :){" "}
            </Typing>
            <p></p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1rem",
};
