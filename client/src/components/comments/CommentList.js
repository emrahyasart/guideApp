import React from "react";
import { connect } from "react-redux";
import {
  removeComment,
  getComments,
  editComment
} from "../../actions/commentsAction";

class CommentList extends React.Component {
  state = {
    editContent: false,
    body: "",
    id: ""
  };

  onDelete = e => {
    const id = e.target.id;
    this.props.removeComment({ id });
  };

  onChange = e => {
    this.setState({
      body: e.target.value
    });
  };

  changeState = e => {
    this.setState({ editContent: true, id: e.target.id });
  };

  onEdit = () => {
    const id = this.state.id;
    const currentComment = this.props.comments.filter(
      comment => comment.id === parseInt(id)
    );

    const updates = {
      body: this.state.body,
      firstName: currentComment[0].firstName,
      lastName: currentComment[0].lastName,
      userId: currentComment[0].userId,
      commentDate: currentComment[0].commentDate,
      language: currentComment[0].language
    };

    this.props
      .editComment(id, updates)
      .then(this.setState({ editContent: false }));
  };

  render() {
    return (
      <div className="comment">
        {this.props.comments.map(comment => {
          if (window.location.href.slice(31) === comment.language) {
            return (
              <div
                style={{
                  width: "95%",
                  backgroundColor: "grey",
                  margin: "10px",
                  border: "dimgrey 2px",
                  padding: "15px",
                  borderRadius: "4px"
                }}
                key={comment.id}
              >
                <div
                  className="author"
                  style={{
                    fontWeight: "bold",
                    marginBottom: "15px",
                    fontSize: "20px"
                  }}
                >
                  <a
                    style={{ color: "white" }}
                    href={
                      parseInt(this.props.auth.id) === comment.userId
                        ? `/users/${this.props.auth.id}`
                        : null
                    }
                  >{`${comment.firstName} ${comment.lastName}`}</a>
                </div>
                <div className="metadata">
                  <div className="date">{`At:  ${comment.commentDate}`}</div>
                </div>
                {this.state.editContent === false ? (
                  <div
                    contentEditable={this.state.editContent}
                    suppressContentEditableWarning={true}
                    id={comment.id}
                    style={{
                      backgroundColor: "white",
                      margin: "5px 5px 15px 0px",
                      color: "black",
                      borderRadius: "3px",
                      padding: "15px",
                      display: "inline-block",
                      height: "auto",
                      width: "95%",
                      wordWrap: "break-word"
                    }}
                  >
                    {comment.body}
                  </div>
                ) : (
                  <textarea
                    contentEditable={this.state.editContent}
                    suppressContentEditableWarning={true}
                    placeholder={comment.body}
                    onChange={this.onChange}
                    id={comment.id}
                    style={{
                      backgroundColor: "white",
                      margin: "5px 5px 15px 0px",
                      color: "black",
                      borderRadius: "3px",
                      padding: "15px",
                      display: "inline-block",
                      height: "auto",
                      width: "95%",
                      wordWrap: "break-word"
                    }}
                  />
                )}
                {parseInt(this.props.auth.id) === comment.userId ? (
                  <div style={{ display: "inline-block" }}>
                    <div
                      className="reply"
                      style={{ float: "left", marginRight: "10px" }}
                    >
                      <button
                        className="mini ui inverted teal button"
                        id={comment.id}
                        onClick={
                          this.state.editContent
                            ? this.onEdit
                            : this.changeState
                        }
                      >
                        {this.state.editContent ? "Approve" : "Edit"}
                      </button>
                    </div>
                    <div style={{ float: "right" }}>
                      <button
                        className="mini ui inverted red button"
                        id={comment.id}
                        value={comment.language}
                        onClick={this.onDelete}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <br />
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    auth: state.auth,
    comments: state.comments,
    language: state.language
  };
};

export default connect(
  mapStateToProps,
  { removeComment, getComments, editComment }
)(CommentList);
