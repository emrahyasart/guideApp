import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import EditUser from "../components/users/EditUser";
import Login from "../components/users/Login";
import Navbar from "../components//UI/Navbar";
import LandingPage from "../components//UI/LandingPage";
import LanguagePage from "../components/UI/LanguagePage";
import UserProfile from "../components/users/UserProfile";
import SignUp from "../components/users/SignUp";
import UsersTable from "../components/users/UsersTable";
import CommentList from "../components/comments/CommentList";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/comment" component={CommentList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/user/:id" component={EditUser} />
        <Route exact path="/language/:name" component={LanguagePage} />
        <Route exact path="/users/:id" component={UserProfile} />
        <Route exact path="/users" component={UsersTable} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
