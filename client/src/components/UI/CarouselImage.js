import React from "react";
import { Link } from "react-router-dom";
import { selectLanguage } from "../../actions/languageAction";
import { connect } from "react-redux";

class CarouselImage extends React.Component {
  onClick = () => {
    this.props.selectLanguage(this.props.name);
  };

  render() {
    return (
      <Link
        to={`/language/${this.props.name}`}
        name={this.props.name}
        onClick={this.onClick}
      >
        <div className="item" style={{ heigth: "256px", width: "256px" }}>
          <img alt={this.props.name} src={this.props.src} />
          <h3
            style={{
              textAlign: "center",
              fontFamily: "Verdana",
              fontSİze: "3em",
              color: "black"
            }}
          >
            {this.props.name}
          </h3>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return { selection: state.language };
};

export default connect(
  mapStateToProps,
  { selectLanguage }
)(CarouselImage);
