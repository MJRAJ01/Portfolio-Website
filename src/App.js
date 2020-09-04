import React, { Component } from "react";
import { useState, useEffect } from "react";

// import GridLayout from 'react-grid-layout';
// import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { Responsive, WidthProvider } from "react-grid-layout";
import DemoComponent from "./components/demoComponent";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import gmail from "./assets/gmail.png";
import react from "./assets/logo-react.png";
import r from "./assets/logo-r.png";
import matlab from "./assets/matlab-logo.png";
import python from "./assets/python-logo.png";
import vandy from "./assets/vandy-logo.png";
import Component1 from "./components/Component1";
import { Spring } from "react-spring/renderprops";

import styles from "../src/styling/Link.module.css";

const ResponsiveGridLayout = WidthProvider(Responsive);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true,
      width: 800,
      height: 182,
    };
    this.onHandle = this.onHandle.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  onHandle() {
    this.setState((prevState) => ({
      value: !prevState.value,
    }));
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
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
    var ratio = this.state.height / this.state.width;
    var height = this.state.height;
    var columnwidth = this.state.width * 0.0005;
    var width = 1;

    if (ratio > 0.45 || ratio < 0.98) {
      width = ratio * 3;
    } else {
      width = 1;
    }

    var layout = [
      { i: "a", x: 1, y: 0, w: width, h: 1 },
      { i: "b", x: 3, y: 0, w: width, h: 1 },
      { i: "c", x: 5, y: 0, w: width, h: 1 },
      { i: "d", x: 2, y: 1, w: width, h: 1 },
      { i: "e", x: 4, y: 1, w: width, h: 1 },
      { i: "f", x: 7, y: 1, w: width, h: 1 },
    ];
    var layout1 = [
      { i: "a", x: 0, y: 0, w: 6, h: 1 },
      { i: "b", x: 6, y: 0, w: 6, h: 1 },
      { i: "c", x: 0, y: 1, w: 6, h: 1 },
      { i: "d", x: 6, y: 1, w: 6, h: 1 },
      { i: "e", x: 0, y: 2, w: 6, h: 1 },
      { i: "f", x: 6, y: 2, w: 6, h: 1 },
    ];

    var layout = { lg: this.state.value === true ? layout : layout1 };

    const titleStyleObj = {
      fontSize: 30,
      textAlign: "center",
      color: " #12263f",
    };
    const centerStyleObj = {
      fontSize: 18,
      textAlign: "center",
      color: " #12263f ",
    };

    const languageLogo = {
      position: "absolute",
      top: "0",
      right: "0",
    };

    return (
      <div>
        <Component1 />
        <div>
          <ResponsiveGridLayout
            className="layout"
            layouts={layout}
            breakpoints={{ lg: 1200 }}
            cols={{ lg: 8 }}
            rowHeight={this.state.height / 3}
            width={this.state.width * 0.5}
            justify="center"
          >
            <div key="a" className={styles.post}>
              <h3>About Me</h3>
              <img width="28" src={vandy} style={languageLogo} />
              <p>
                {" "}
                I’m a sophomore at Vanderbilt majoring in Computer Science and
                Economics with a passion for research and web development. I
                love all things cooking and try my best to keep up with politics
                and basketball!
              </p>{" "}
            </div>
            <div key="b" className={styles.post}>
              <img width="28" src={react} style={languageLogo} />
              <h3>ROI Calculator </h3>
              <p>
                {" "}
                <li>
                  ROI Calculator that dynamically calculates Return on
                  Investment for team managers when subscribing to HiveDesk{" "}
                </li>{" "}
                <li>Built using ReactJS and released on HiveDesk's website</li>
              </p>{" "}
            </div>
            <div key="c" className={styles.post}>
              <h3>Refugee Media Effects </h3>
              <img width="28" src={r} style={languageLogo} />
              <p>
                {" "}
                <li>
                  Data analysis project focusing on the media effects
                  experienced by Tennessee's refugee population
                </li>
                <li>
                  Created in R working in a partnership between the ROCCA Lab
                  and Vanderbilt's Data Science Institute{" "}
                </li>
              </p>{" "}
            </div>
            <div key="d" className={styles.post}>
              <h3>Glucose RL </h3>
              <img width="28" src={matlab} style={languageLogo} />
              <p>
                {" "}
                <li>
                  Supervised reinforcment learning algorithm created in MATLAB
                  that delivers individualized hourly insulin responses for
                  simulated Type 1 Diabetic patients
                </li>
                <li>
                  Simulates a cohort of 23 virtual patients constructed through
                  parameter estimation of real-world ICU data
                </li>
              </p>{" "}
            </div>
            <div key="e" className={styles.post}>
              <h3>Elections 2020! </h3>
              <img width="28" src={python} style={languageLogo} />
              <p>
                {" "}
                <li>
                  Upcoming Python project using Twitter senitment analysis to
                  analyze the 2020 Election
                </li>
              </p>{" "}
            </div>
          </ResponsiveGridLayout>

          <div
            style={{
              paddingTop: "50px",
              boxSizing: "content-box",
              textAlign: "center",
            }}
          >
            <a href="https://www.linkedin.com/in/mark-raj-471b49128">
              <img
                id="contactLogo"
                width="75"
                target="__parent"
                src={linkedin}
              />
            </a>
            <a href="https://github.com/MJRAJ01">
              <img width="75" target="__parent" src={github} />
            </a>
            <a href="mailto:mark.j.raj@vanderbilt.edu">
              <img width="75" target="__parent" src={gmail} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
