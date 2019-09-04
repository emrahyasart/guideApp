import React from "react";
import { connect } from "react-redux";
import { addComment } from "../../actions/commentsAction";

const CommentField = props => {
  const [body, setBody] = React.useState("");
  const [error, setError] = React.useState("");

  const onBodyChange = event => {
    setBody(event.target.value);
    event.preventDefault();
  };

  const clearBody = () => {
    setBody("");
  };

  const alertBody = () => {
    setError("Please Sign In");
    error !== "Please Sign In" ? alert("Please Sign In") : alert(error);
  };

  const findUser = props.commentData.users.filter(
    currentUser => currentUser.id === parseInt(props.commentData.auth.id)
  );

  const user = findUser[0];

  const today = new Date();

  const onSubmit = event => {
    if (user !== undefined) {
      event.preventDefault();
      if (!body) {
        setError("Please fill the necessary fields!");
      } else {
        const comment = {
          body: body,
          firstName: user.firstName,
          lastName: user.lastName,
          userId: user.id,
          commentDate:
            today.getDate() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getFullYear() +
            "   " +
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds(),
          language: props.name
        };

        props.addComment(comment);
        clearBody();
      }
    } else {
      alert("User not found. Please Sign In");
    }
  };

  return (
    <div>
      <form className="ui reply form">
        <div className="field">
          <textarea onChange={onBodyChange} value={body} />
        </div>
        <button
          onClick={props.commentData.auth.token ? onSubmit : alertBody}
          className="ui  button"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return { commentData: state };
};

export default connect(
  mapStateToProps,
  { addComment }
)(CommentField);
