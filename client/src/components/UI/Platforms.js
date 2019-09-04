import React, { Component } from "react";
import { Segment, Image } from "semantic-ui-react";
import { data } from "../../data/data";

const courseraImg = require("../../images/coursera.png");
const udemyImg = require("../../images/udemy.jpg");
const udacityImg = require("../../images/udacity.jpg");
const edxImg = require("../../images/edx.png");
const scrimbaImg = require("../../images/scrimba.jpg");

class Platforms extends Component {
  platformFinder = () => {
    const platformName = this.props.platform;
    const position = this.props.pos;
    switch (platformName) {
      case "Coursera":
        return {
          to: "https://www.coursera.org/",
          img: courseraImg,
          text: data.platforms.coursera,
          loc: position
        };
      case "Edx":
        return {
          to: "https://www.edx.org/",
          img: edxImg,
          text: data.platforms.edx,
          loc: position
        };
      case "Udemy":
        return {
          to: "https://www.udemy.com/",
          img: udemyImg,
          text: data.platforms.udemy,
          loc: position
        };
      case "Udacity":
        return {
          to: "https://www.udacity.com/",
          img: udacityImg,
          text: data.platforms.udacity,
          loc: position
        };
      case "Scrimba":
        return {
          to: "https://scrimba.com/",
          img: scrimbaImg,
          text: data.platforms.scrimba,
          loc: position
        };
      default:
        return null;
    }
  };
  render() {
    return (
      <div>
        <Segment
          attached="bottom"
          style={{
            marginTop: "-5px",
            background: "#black",
            color: "white",
            height: "400px",
            textAlign: "center",
            fontSize: "50px",
            fontWeight: "bold",
            lineHeight: "70px",
            wordSpacing: "5px",
            verticalAlign: "middle",
            backgroundColor: "black"
          }}
        >
          <Image
            alt="sth"
            rel="noopener noreferrer"
            target="_blank"
            href={this.platformFinder().to}
            src={this.platformFinder().img}
            size="medium"
            floated={this.platformFinder().loc}
            style={
              this.platformFinder().loc === "left"
                ? { marginRight: "120px" }
                : { marginLeft: "120px" }
            }
          />
          <span
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              verticalAlign: "middle"
            }}
          >
            {this.platformFinder().text}
          </span>
        </Segment>
      </div>
    );
  }
}

export default Platforms;
