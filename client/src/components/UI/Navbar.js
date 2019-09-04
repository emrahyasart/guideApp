import React from "react";
import { Menu, Segment, Button, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions/authAction";
import { selectLanguage } from "../../actions/languageAction";

class Navbar extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  onClick = e => {
    this.props.selectLanguage(e.target.name);
  };

  onSignOutClick = () => {
    this.props.signOut();
  };

  render() {
    const { activeItem } = this.state;
    const userId = this.props.auth.id ? this.props.auth.id : null;

    return (
      <Segment inverted style={{ borderRadius: "0px" }}>
        <Menu inverted pointing secondary size="massive">
          <Menu.Item
            href="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
            href={userId === null ? "/login" : `/users/${userId}`}
          />
          <Menu.Item
            href="/users"
            name="users"
            active={activeItem === "users"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="languages"
            active={activeItem === "languages"}
            onClick={this.handleItemClick}
          >
            <Dropdown text="Languages">
              <Dropdown.Menu style={{ marginTop: "20px" }}>
                <Dropdown.Item
                  name="C_Language"
                  onClick={this.onClick}
                  href={`/language/C_Language`}
                >
                  C
                </Dropdown.Item>
                <Dropdown.Item
                  name="CSHARP"
                  onClick={this.onClick}
                  href={`/language/CSHARP`}
                >
                  CSHARP
                </Dropdown.Item>
                <Dropdown.Item
                  name="CSS"
                  onClick={this.onClick}
                  href={`/language/CSS`}
                >
                  CSS
                </Dropdown.Item>
                <Dropdown.Item
                  name="GO"
                  onClick={this.onClick}
                  href={`/language/GO`}
                >
                  GO
                </Dropdown.Item>
                <Dropdown.Item
                  name="HTML"
                  onClick={this.onClick}
                  href={`/language/HTML`}
                >
                  HTML
                </Dropdown.Item>
                <Dropdown.Item
                  name="JAVA"
                  onClick={this.onClick}
                  href={`/language/JAVA`}
                >
                  JAVA
                </Dropdown.Item>
                <Dropdown.Item
                  name="JAVASCRIPT"
                  onClick={this.onClick}
                  href={`/language/JAVASCRIPT`}
                >
                  JAVASCRIPT
                </Dropdown.Item>
                <Dropdown.Item
                  name="KOTLIN"
                  onClick={this.onClick}
                  href={`/language/KOTLIN`}
                >
                  KOTLIN
                </Dropdown.Item>
                <Dropdown.Item
                  name="PHP"
                  onClick={this.onClick}
                  href={`/language/PHP`}
                >
                  PHP
                </Dropdown.Item>
                <Dropdown.Item
                  name="PYTHON"
                  onClick={this.onClick}
                  href={`/language/PYTHON`}
                >
                  PYTHON
                </Dropdown.Item>
                <Dropdown.Item
                  name="RUBY"
                  onClick={this.onClick}
                  href={`/language/RUBY`}
                >
                  RUBY
                </Dropdown.Item>
                <Dropdown.Item
                  name="SWIFT"
                  onClick={this.onClick}
                  href={`/language/SWIFT`}
                >
                  SWIFT
                </Dropdown.Item>
                <Dropdown.Item
                  name="TYPESCRIPT"
                  onClick={this.onClick}
                  href={`/language/TYPESCRIPT`}
                >
                  TYPESCRIPT
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item position="right">
            <Button
              href={this.props.auth.id ? "/" : "/login"}
              as="a"
              inverted
              onClick={this.props.auth.id ? this.onSignOutClick : null}
            >
              {this.props.auth.token ? "Sign Out" : "Sign In"}
            </Button>
            <Button
              href="/signup"
              as="a"
              inverted
              style={{ marginLeft: "0.5em" }}
            >
              Sign Up
            </Button>
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth, users: state.users };
};

export default connect(
  mapStateToProps,
  { signIn, signOut, selectLanguage }
)(Navbar);
