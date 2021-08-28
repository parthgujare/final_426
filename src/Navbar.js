import React, { useState, useEffect } from "react";
import app from "firebase";

import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";
export default function Navbar() {
  const [theme, setTheme] = useState();
  useEffect(() => {
    app
      .firestore()
      .collection("users")
      .doc(app.auth().currentUser.uid)
      .get()
      .then((doc) => {
        setTheme(doc.data().theme);
      });
    console.log("done");
  }, []);

  const themeToggler = () => {
    let toChange = "";
    theme === "light" ? (toChange = "dark") : (toChange = "light");
    setTheme(toChange);
    app.firestore().collection("users").doc(app.auth().currentUser.uid).set({
      theme: toChange,
      test: "hi",
    });
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div>
          <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                COMP 426 Final Project
              </Link>
              <Link className="navbar-item" to="/doge">
                Dogecoin News
              </Link>
              <Link className="navbar-item" onClick={themeToggler}>
                Switch Theme
              </Link>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item" onClick={() => app.auth().signOut()}>
                  Sign Out
                </a>
              </div>
            </div>
          </nav>
        </div>
      </>
    </ThemeProvider>
  );
}
