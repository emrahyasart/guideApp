import { SIGN_IN, SIGN_OUT } from "../actions/types";

let initialState = {};
let token = localStorage.getItem("token");
let id = localStorage.getItem("id");

let idStr = "id";
let tokenStr = "token";

if (token === "undefined") {
  token = null;
} else {
  initialState[idStr] = id;
  initialState[tokenStr] = token;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        [tokenStr]: action.payload.accessToken,
        [idStr]: action.payload.id
      };

    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
