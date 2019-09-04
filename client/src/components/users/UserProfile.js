import React from "react";
import { Header, Segment, Container, Grid, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { removeUser } from "../../actions/usersAction";
import { signOut } from "../../actions/authAction";

const UserProfile = props => {
  const onClick = () => {
    const id = props.match.params.id;
    localStorage.clear();
    props.signOut();
    props.removeUser(id);
    props.history.push("/");
  };
  const findUser = props.users.filter(
    currentUser => currentUser.id === parseInt(props.auth.id)
  );
  const user = findUser[0];
  return (
    <div>
      {user ? (
        <Container text style={{ marginBottom: "50px" }}>
          <div
            style={{
              fontSize: "50px",
              fontFamily: "Verdana",
              textAlign: "center",
              borderBottom: "2px solid grey",
              color: "teal"
            }}
          >
            {user.firstName} {user.lastName}
          </div>
          <Segment.Group raised>
            <Header as="h3" attached="top" style={{ color: "teal" }}>
              Firstname
            </Header>
            <Segment>{user.firstName}</Segment>
          </Segment.Group>
          <Segment.Group raised>
            <Header as="h3" attached="top" style={{ color: "teal" }}>
              Lastname
            </Header>
            <Segment>{user.lastName}</Segment>
          </Segment.Group>
          <Segment.Group raised>
            <Header as="h3" attached="top" style={{ color: "teal" }}>
              Country
            </Header>
            <Segment>{user.country}</Segment>
          </Segment.Group>
          <Segment.Group raised>
            <Header as="h3" attached="top" style={{ color: "teal" }}>
              Email
            </Header>
            <Segment>{user.email}</Segment>
          </Segment.Group>
          <Segment.Group raised>
            <Header as="h3" attached="top" style={{ color: "teal" }}>
              About
            </Header>
            <Segment>{user.about}</Segment>
          </Segment.Group>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Button href={`/user/${user.id}`} fluid color="teal">
                  EDIT
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button onClick={onClick} fluid color="red">
                  DELETE
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      ) : (
        alert("User not found. Please Sign In")
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { removeUser, signOut }
)(UserProfile);
