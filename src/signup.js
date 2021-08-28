import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import app from "firebase";
import firebase from "firebase/app";

const divStyle = {
  height: "100vh",
};

const Signup = ({ history }) => {
  const handleSignup = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then((cred) => {
            return app.firestore().collection("users").doc(cred.user.uid).set({
              theme: "light",
            });
          })
          .then(() => {
            history.push("/");
          });
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div
      className="is-flex is-justify-content-center is-align-items-center"
      style={divStyle}
    >
      <div className="card content column is-one-third">
        <h2 className="is-flex is-justify-content-center mt-3">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="field">
            <p className="control has-icons-left">
              <input
                name="email"
                className="input is-primary is-normal"
                type="email"
                placeholder="Email"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                name="password"
                className="input is-primary is-normal"
                type="password"
                placeholder="Password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="control is-flex is-justify-content-center">
            <button className="button is-primary" type="submit">
              Register
            </button>
          </div>
        </form>
        <p className="is-flex is-justify-content-center mt-3">
          Already have an account?&nbsp;<Link to="/Login">Log In</Link>.
        </p>
      </div>
    </div>
  );
};

export default withRouter(Signup);
