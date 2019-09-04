import { SELECT_LANGUAGE } from "./types";

export const selectLanguage = language => dispatch => {
  dispatch({
    type: SELECT_LANGUAGE,
    payload: language
  });
  localStorage.setItem("languageName", language);
};
