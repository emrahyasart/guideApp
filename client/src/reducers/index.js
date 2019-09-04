import { combineReducers } from "redux";
import languageReducer from "./languageReducer";
import userReducer from "./usersReducer";
import commentsReducer from "./commentsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  users: userReducer,
  language: languageReducer,
  comments: commentsReducer,
  auth: authReducer
});
