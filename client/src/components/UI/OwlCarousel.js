import React from "react";
import OwlCarousel from "react-owl-carousel";
import CarouselImage from "./CarouselImage";
import { connect } from "react-redux";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const c = require("../../images/c.png");
const csharp = require("../../images/csharp.png");
const css = require("../../images/css.png");
const go = require("../../images/go.png");
const html = require("../../images/html.png");
const java = require("../../images/java.png");
const javascript = require("../../images/javascript.png");
const kotlin = require("../../images/kotlin.png");
const php = require("../../images/php.png");
const python = require("../../images/python.png");
const ruby = require("../../images/ruby.png");
const swift = require("../../images/swift.png");
const typescript = require("../../images/typescript.png");

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <h1
          style={{
            marginBottom: "50px",
            marginTop: "50px",
            textAlign: "center",
            fontFamily: "Verdana",
            fontSize: "3em"
          }}
        >
          Favourite Languages
        </h1>
        <OwlCarousel
          className="owl-theme"
          rewind
          autoplay={true}
          autoplayTimeout={2000}
          loop
          navClass
          autoplayHoverPause
          style={{ marginTop: "50px" }}
        >
          <CarouselImage name="C_Language" src={c} />
          <CarouselImage name="CSHARP" src={csharp} />
          <CarouselImage name="CSS" src={css} />
          <CarouselImage name="GO" src={go} />
          <CarouselImage name="HTML" src={html} />
          <CarouselImage name="JAVA" src={java} />
          <CarouselImage name="JAVASCRIPT" src={javascript} />
          <CarouselImage name="KOTLIN" src={kotlin} />
          <CarouselImage name="PHP" src={php} />
          <CarouselImage name="PYTHON" src={python} />
          <CarouselImage name="RUBY" src={ruby} />
          <CarouselImage name="SWIFT" src={swift} />
          <CarouselImage name="TYPESCRIPT" src={typescript} />
        </OwlCarousel>
      </div>
    );
  }
}

export default connect()(Carousel);
