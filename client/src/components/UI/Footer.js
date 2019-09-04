import React from "react";
import { Segment, Container, Grid, List, Header } from "semantic-ui-react";

const FooterPage = () => {
  return (
    <Segment
      inverted
      vertical
      style={{ padding: "5em 0em", backgroundColor: "black" }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Header inverted as="h3" content="Technologies Used" />
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Front End" />
              <List link inverted>
                <List.Item
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://reactjs.org/"
                  as="a"
                >
                  React
                </List.Item>
                <List.Item
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://tr.reactjs.org/docs/hooks-overview.html"
                  as="a"
                >
                  React Hooks
                </List.Item>
                <List.Item
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://redux.js.org/"
                  as="a"
                >
                  Redux
                </List.Item>
                <List.Item
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://material-ui.com/"
                  as="a"
                >
                  Material UI
                </List.Item>
                <List.Item
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://semantic-ui.com/"
                  as="a"
                >
                  Semantic UI
                </List.Item>
                <List.Item
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://react.semantic-ui.com/"
                  as="a"
                >
                  Semantic UI React
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Back End" />
              <List link inverted>
                <List.Item
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.mysql.com/"
                  as="a"
                >
                  MySQL
                </List.Item>
                <List.Item
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://nodejs.org/en/"
                  as="a"
                >
                  Node.js
                </List.Item>
                <List.Item
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://expressjs.com/"
                  as="a"
                >
                  Express.js
                </List.Item>
                <List.Item
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://jwt.io/"
                  as="a"
                >
                  JWT
                </List.Item>
                <List.Item
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://sequelize.org/"
                  as="a"
                >
                  Sequelize
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted content="Emrah Yasarturk" />
              <List link inverted>
                <List.Item
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/emrahyasart"
                  as="a"
                >
                  Github
                </List.Item>
                <List.Item
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/emrahyasarturk/"
                  as="a"
                >
                  Linkedin
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default FooterPage;
