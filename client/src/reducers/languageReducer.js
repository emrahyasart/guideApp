import { SELECT_LANGUAGE } from "../actions/types";

let initialState = {};
let languageName = localStorage.getItem("languageName");

if (languageName === undefined) {
  languageName = null;
} else {
  initialState["languageName"] = languageName;
}
let name = "languageName";
export default (state = initialState, action) => {
  if (action.type === SELECT_LANGUAGE) {
    return { ...state, [name]: action.payload };
  } else {
    return state;
  }
};
