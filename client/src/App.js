import React from "react";
import Login from "./components/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
