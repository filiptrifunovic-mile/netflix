import { useState } from "react";
import "../css/Login.css";
import login from "../images/login.png";
import logo from "../images/logo.png";
import SignInScreen from "./SignInScreen";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login-screen">
      <div className="login-screen-background">
        <img src={logo} alt="login" className="login-screen-logo" />
        <button className="login-screen-buttom" onClick={() => setSignIn(true)}>
          Sign in
        </button>
        <div className="login-screen-gradient" />
      </div>
      <div className="login-screen-body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login-screen-input">
              <form>
                <input type="email" placeholder="Email adress" />
                <button
                  className="login-screen-getstarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
