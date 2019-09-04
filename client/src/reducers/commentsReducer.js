import {
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  GET_COMMENTS
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.comment];
    case DELETE_COMMENT:
      return state.filter(({ id }) => id !== parseInt(action.id));

    case EDIT_COMMENT:
      return state.map(comment => {
        if (comment.id === parseInt(action.id)) {
          return {
            ...comment,
            ...action.updates
          };
        } else {
          return comment;
        }
      });
    case GET_COMMENTS:
      return action.comments;
    default:
      return state;
  }
};
