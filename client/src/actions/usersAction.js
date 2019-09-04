import axios from "../axios/axios";
import history from "../history";
import { SIGN_UP, REMOVE_USER, EDIT_USER, GET_USERS } from "./types";

const _addUser = (user, id) => ({
  type: SIGN_UP,
  user,
  id
});

export const addUser = (
  userData = {
    firstName: "",
    lastName: "",
    country: "",
    about: "",
    email: "",
    password: ""
  },
  id
) => {
  return dispatch => {
    const user = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      country: userData.country,
      about: userData.about,
      email: userData.email,
      password: userData.password
    };
    return axios.post("auth/signup", user).then(response => {
      console.log(response);
      dispatch(_addUser(user, id));
    });
  };
};

const _removeUser = id => ({
  type: REMOVE_USER,
  id
});

export const removeUser = id => {
  return dispatch => {
    return axios.delete(`users/${id}`).then(() => {
      localStorage.clear();
      localStorage.setItem("token", undefined);
      dispatch(_removeUser(id));
      console.log(localStorage);
      history.push("/");
    });
  };
};

const _editUser = (id, updates) => ({
  type: EDIT_USER,
  id,
  updates
});

export const editUser = (id, updates) => {
  return dispatch => {
    return axios.put(`users/${id}`, updates).then(() => {
      dispatch(_editUser(id, updates));
    });
  };
};

const _getUsers = users => ({
  type: GET_USERS,
  users
});

export const getUsers = () => {
  return dispatch => {
    return axios.get("users").then(result => {
      const users = [];
      result.data.forEach(item => {
        users.push(item);
      });
      dispatch(_getUsers(users));
    });
  };
};
