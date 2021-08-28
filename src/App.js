import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import Signup from "./signup";
import Login from "./Login";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import app from "./firebase";
import Newsfeed from "./Newsfeed";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/doge" component={Newsfeed} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
