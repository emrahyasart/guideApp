import { SIGN_UP, REMOVE_USER, EDIT_USER, GET_USERS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, [action.id]: action.user };
    case REMOVE_USER:
      console.log(state);

      return state.filter(user => user.id !== parseInt(action.id));
    case EDIT_USER:
      return state.map(user => {
        if (user.id === action.id) {
          return {
            ...user,
            ...action.updates
          };
        } else {
          return user;
        }
      });
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
};
