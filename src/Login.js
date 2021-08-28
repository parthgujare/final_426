import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import app from "firebase";
import { AuthContext } from "./Auth.js";
const divStyle = {
  height: "100vh",
};

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div
      className="is-flex is-justify-content-center is-align-items-center"
      style={divStyle}
    >
      <div className="card content column is-one-third">
        <h2 className="is-flex is-justify-content-center mt-3">
          Returning User?
        </h2>
        <form onSubmit={handleLogin}>
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
              Login
            </button>
          </div>
        </form>

        <p className="is-flex is-justify-content-center mt-3">
          Need an account?&nbsp;<Link to="/signup">Sign Up</Link>.
        </p>
      </div>
    </div>
  );
};

export default withRouter(Login);
