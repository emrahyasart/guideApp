import axios from "../axios/axios";
import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (
  userData = {
    email: "",
    password: ""
  }
) => {
  return dispatch => {
    const user = {
      email: userData.email,
      password: userData.password
    };

    return axios
      .post("auth/signin", user)
      .then(result => {
        dispatch({
          type: SIGN_IN,
          payload: result.data
        });
        localStorage.setItem("token", result.data.accessToken);
        localStorage.setItem("id", result.data.id);
      })
      .catch(err =>
        err.message === "Request failed with status code 401"
          ? alert("Invalid Password")
          : alert("User not found")
      );
  };
};

const _signOut = () => ({
  type: SIGN_OUT
});

export function signOut() {
  return function(dispatch) {
    dispatch(_signOut());
    localStorage.clear();
  };
}
