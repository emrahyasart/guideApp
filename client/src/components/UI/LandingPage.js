import Carousel from "./OwlCarousel";
import React, { Component } from "react";
import Platforms from "./Platforms";
import Footer from "./Footer";
import AnimatedText from "../animatedText/AnimatedText";

import Texts from "./Texts";
import {
  Container,
  Header,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header>
      <AnimatedText />
    </Header>

    <Header
      as="h2"
      content="Benefit from the advices of experienced developers"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
  </Container>
);

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { fixed } = this.state;

    return (
      <Responsive style={{ marginTop: "-15px" }}>
        <Visibility once={false}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            />
            <HomepageHeading />
          </Segment>
        </Visibility>
        <Carousel style={{ marginTop: "20px" }} />
        <Platforms platform="Udemy" pos="left" href="www.udemy.com" />
        <Platforms platform="Udacity" pos="right" />
        <Platforms platform="Edx" pos="left" />
        <Platforms platform="Scrimba" pos="right" />
        <Platforms platform="Coursera" pos="left" />
        <Texts />
        <Footer />
      </Responsive>
    );
  }
}

export default DesktopContainer;
