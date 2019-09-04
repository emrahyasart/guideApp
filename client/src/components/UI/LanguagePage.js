import React from "react";
import { data } from "../../data/data";
import { connect } from "react-redux";
import { selectLanguage } from "../../actions/languageAction";
import { Grid, Segment, Divider, Header } from "semantic-ui-react";
import CommentField from "../comments/CommentField";
import CommentList from "../comments/CommentList";

const c5 = require("../../images/c5.png");
const csharp5 = require("../../images/csharp5.png");
const css5 = require("../../images/css5.png");
const go5 = require("../../images/go5.png");
const html5 = require("../../images/html5.png");
const java5 = require("../../images/java5.png");
const javascript5 = require("../../images/javascript5.png");
const kotlin5 = require("../../images/kotlin5.png");
const php5 = require("../../images/php5.png");
const python5 = require("../../images/python5.png");
const ruby5 = require("../../images/ruby5.png");
const swift5 = require("../../images/swift5.png");
const typescript5 = require("../../images/typescript5.png");

class LanguagePage extends React.Component {
  getLanguage = () => {
    const languageName = this.props.match.params.name;

    switch (languageName) {
      case "C_Language":
        return { info: data.C, img: c5 };
      case "CSHARP":
        return { info: data.CSharp, img: csharp5 };
      case "CSS":
        return { info: data.CSS, img: css5 };
      case "GO":
        return { info: data.GO, img: go5 };
      case "RUBY":
        return { info: data.RUBY, img: ruby5 };
      case "HTML":
        return { info: data.HTML, img: html5 };
      case "JAVA":
        return { info: data.JAVA, img: java5 };
      case "JAVASCRIPT":
        return { info: data.JAVASCRIPT, img: javascript5 };
      case "KOTLIN":
        return { info: data.KOTLIN, img: kotlin5 };
      case "PHP":
        return { info: data.PHP, img: php5 };
      case "PYTHON":
        return { info: data.PYTHON, img: python5 };
      case "SWIFT":
        return { info: data.SWIFT, img: swift5 };
      case "TYPESCRIPT":
        return { info: data.TYPESCRIPT, img: typescript5 };
      default:
        return { info: "", img: "" };
    }
  };

  render() {
    const lang = this.getLanguage();

    return (
      <div>
        <Grid style={{ marginTop: "100px" }}>
          <Grid.Column width={3}>
            <img alt={lang.info.name} src={lang.img} />
          </Grid.Column>
          <Grid.Column width={10} style={{ marginLeft: "250px" }}>
            <Header
              style={{
                fontSize: "50px",
                fontFamily: "calibri",
                textShadow: "2px 2px grey "
              }}
            >
              {lang.info.name}
            </Header>
            <Header style={{ fontSize: "35px", fontFamily: "calibri" }}>
              {lang.info.slogan}
            </Header>
            <div
              style={{
                textAlign: "justify",
                fontSize: "20px",
                lineHeight: "35px",
                fontFamily: "calibri"
              }}
            >
              {lang.info.description}
            </div>
          </Grid.Column>
        </Grid>

        <div>
          <Segment
            attached="bottom"
            style={{
              marginTop: "20px",
              background: "#222",
              color: "white",
              height: "400px"
            }}
          >
            <Grid columns={2} stackable>
              <Divider vertical />
              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <Segment
                    style={{
                      background: "#222",
                      overflow: "auto",
                      height: "370px"
                    }}
                  >
                    <CommentList />
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment
                    style={{
                      verticalAlign: "super",
                      background: "#222",
                      overflow: "auto",
                      height: "370px"
                    }}
                  >
                    <CommentField name={this.props.language.languageName} />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language,
    auth: state.auth,
    comments: state.comments
  };
};

export default connect(
  mapStateToProps,
  { selectLanguage }
)(LanguagePage);
