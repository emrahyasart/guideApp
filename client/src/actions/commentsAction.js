import axios from "../axios/axios";

import {
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  GET_COMMENTS
} from "./types";

const _addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

export const addComment = (
  commentData = {
    body: "",
    firstName: "",
    lastName: "",
    userId: "",
    commentDate: "",
    language: ""
  }
) => {
  return dispatch => {
    const comment = {
      body: commentData.body,
      firstName: commentData.firstName,
      lastName: commentData.lastName,
      userId: commentData.userId,
      commentDate: commentData.commentDate,
      language: commentData.language
    };
    console.log(comment);
    return axios
      .post("comments/create", comment)
      .then(result => {
        dispatch(_addComment(result.data));
      })
      .catch(err => console.log(err));
  };
};

const _removeComment = ({ id } = {}) => ({
  type: DELETE_COMMENT,
  id
});

export const removeComment = ({ id } = {}) => {
  return dispatch => {
    return axios.delete(`comments/${id}`).then(response => {
      if (response.status === 200) {
        dispatch(_removeComment({ id }));
      }
    });
  };
};

const _editComment = (id, updates) => ({
  type: EDIT_COMMENT,
  id,
  updates
});

export const editComment = (id, updates) => {
  return dispatch => {
    return axios.put(`comments/${id}`, updates).then(response => {
      dispatch(_editComment(id, updates));
    });
  };
};

const _getComments = comments => ({
  type: GET_COMMENTS,
  comments
});

export const getComments = () => {
  return dispatch => {
    return axios.get("comments").then(result => {
      const comments = [];
      result.data.forEach(item => {
        comments.push(item);
      });
      dispatch(_getComments(comments));
    });
  };
};
