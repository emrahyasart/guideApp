import React from "react";
import { Segment, Container, Header, Button, Divider } from "semantic-ui-react";

const Texts = () => {
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          The most important skill a programmer can learn{" "}
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          As a programmer, writing code is the biggest part of your job. In your
          programming lifetime, you will have to deal with different kinds of
          code requests. Each request will force you to make difficult
          decisions. That all is OKAY. Nothing wrong with that. This is what
          everyone expects from you, as a programmer: Writing code. However,
          here is a question: Should you write all the code that is requested
          from you?
        </p>
        <Button
          as="a"
          size="large"
          rel="noopener noreferrer"
          target="_blank"
          href="https://medium.com/free-code-camp/the-most-important-skill-a-programmer-can-learn-9d410c786baf"
        >
          Read More
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.thebalancecareers.com/top-web-development-blogs-to-level-up-your-skills-2071400"
          >
            Web Development Blogs
          </a>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          A useful source for starters
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Traversy Media brings you free and paid web development and
          programming courses. Learn how to write code in a simple and easy to
          learn fashion with courses by Brad Traversy
        </p>
        <Button
          as="a"
          size="large"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.traversymedia.com/"
        >
          Traversy Media
        </Button>
      </Container>
    </Segment>
  );
};

export default Texts;
